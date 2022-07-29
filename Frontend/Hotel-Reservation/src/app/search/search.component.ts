import { Component, OnInit } from '@angular/core';
import { Room } from '../model/Room';
import { RoomApiService } from '../room-api.service';
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  tier :string = "";
  startDate :Date = new Date();
  endDate :Date = new Date();
  numberOfBeds :number = 0;
  minPrice :number = 0;
  maxPrice :number = 0;

  roomsByAvailability: Array<Room> = []
  roomsByPrice: Array<Room> = []
  roomsByBeds: Array<Room> = []
  roomsByTier: Array<Room> = []

  roomApi: RoomApiService

  constructor(roomApi: RoomApiService) {
    this.roomApi = roomApi
   }

  ngOnInit(): void {
  }

  search() {

    const call1 = this.roomApi.findByAvailability(this.startDate.toString(), this.endDate.toString())

    const call2 = this.roomApi.findByBeds(this.numberOfBeds)

    const call3 = this.roomApi.findByPrice(this.minPrice, this.maxPrice)

    const call4 = this.roomApi.findByTier(this.tier)

    forkJoin(call1, call2, call3, call4).subscribe(resp => {

      let searchedRooms = resp[0].filter((a: { roomNum: any; }) => {
        return resp[1].some((bed: { roomNum: any; }) => bed.roomNum === a.roomNum)
      })
        .filter((ab: { roomNum: number; }) => {
          return resp[2].some((price: { roomNum: number; }) => price.roomNum === ab.roomNum)
        })
        .filter((abp: { roomNum: number; }) => {
          return resp[3].some((tier: { roomNum: number; }) => tier.roomNum === abp.roomNum)
        })

      searchedRooms.forEach((room: any) => {
        console.log(room)
      })
    })
  }
}
