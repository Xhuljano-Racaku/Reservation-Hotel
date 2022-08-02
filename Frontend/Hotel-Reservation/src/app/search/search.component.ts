import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room } from '../model/Room';
import { RoomApiService } from '../room-api.service';
import {forkJoin} from "rxjs";
import { AppComponent } from '../app.component';
import { compareAsc, format } from 'date-fns'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  tier :string = "none";
  startDate :string = format(new Date(), 'yyyy-MM-dd')
  endDate :string = format(new Date(), 'yyyy-MM-dd')
  numberOfBeds :number = 100;
  minPrice :number = 0;
  maxPrice :number = 0;

  roomsByAvailability: Array<Room> = []
  roomsByPrice: Array<Room> = []
  roomsByBeds: Array<Room> = []
  roomsByTier: Array<Room> = []
  
  @Input() searchedRooms: Array<Room> = []

  roomApi: RoomApiService

  constructor(roomApi: RoomApiService) {
    this.roomApi = roomApi
   }

  ngOnInit(): void {
  }

  toRoomList() {
    setTimeout(()=> {
      document.getElementById("roomsList")?.scrollIntoView({behavior:'smooth'});
      },200)
    }

  search() {

    const call1 = this.roomApi.findByAvailability(this.startDate, this.endDate)

    const call2 = this.roomApi.findByBeds(this.numberOfBeds)

    const call3 = this.roomApi.findByPrice(this.minPrice, this.maxPrice)

    const call4 = this.roomApi.findByTier(this.tier)

    forkJoin(call1, call2, call3, call4).subscribe(resp => {

      this.searchedRooms = resp[0].filter((a: { roomNum: any; }) => {
        return resp[1].some((bed: { roomNum: any; }) => bed.roomNum === a.roomNum)
      })
        .filter((ab: { roomNum: number; }) => {
          return resp[2].some((price: { roomNum: number; }) => price.roomNum === ab.roomNum)
        })
        .filter((abp: { roomNum: number; }) => {
          return resp[3].some((tier: { roomNum: number; }) => tier.roomNum === abp.roomNum)
        })

      this.searchedRooms.forEach((room: any) => {
        console.log(room)
      })
    })

    
  }
}
