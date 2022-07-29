import { Component, OnInit } from '@angular/core';
import { Room } from '../model/Room';
import { RoomApiService } from '../room-api.service';

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

  search(){


    this.roomApi.findByAvailability(this.startDate.toString(), this.endDate.toString()).subscribe(resp => {
      this.roomsByAvailability = resp
    })

    this.roomApi.findByBeds(this.numberOfBeds).subscribe(resp => {
      this.roomsByBeds = resp
    })

    this.roomApi.findByPrice(this.minPrice, this.maxPrice).subscribe(resp => {
      this.roomsByPrice = resp
    })

    this.roomApi.findByTier(this.tier).subscribe(resp => {
      this.roomsByTier = resp
    })

    let searchedRooms = this.roomsByAvailability.filter(a => {
      return this.roomsByBeds.some(bed => bed.roomNum === a.roomNum)
    })
    .filter(ab => {
      return this.roomsByPrice.some(price => price.roomNum === ab.roomNum)
    })
    .filter(abp => {
      return this.roomsByTier.some(tier => tier.roomNum === abp.roomNum)
    })

    searchedRooms.forEach(room => {
      console.log(room)
    })
  }
}
