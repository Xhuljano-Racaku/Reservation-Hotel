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

  searchedRooms: Array<Room> = []

  roomApi: RoomApiService

  constructor(roomApi: RoomApiService) {
    this.roomApi = roomApi
   }

  ngOnInit(): void {
  }

  search(){

    this.roomApi.findByAvailablity(this.startDate.toString(), this.endDate.toString()).subscribe(resp => {
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

    this.searchedRooms = this.roomsByAvailability
    .filter(x => this.roomsByBeds.includes(x))
    .filter(x => this.roomsByPrice.includes(x))
    .filter(x => this.roomsByTier.includes(x))

  }

}
