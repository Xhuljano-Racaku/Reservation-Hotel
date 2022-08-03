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

  tier !:string;
  startDate :string = ""
  endDate :string = ""
  numberOfBeds!: number;
  minPrice!: number 
  maxPrice!: number 

  roomOptions : any[] = []
  tierOptions: any[] = []

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
    this.roomOptions = [
      { name: "Any",value: 0 },
      { name: "1",value: 1 },
      { name: "2",value: 2 },
      { name: "3",value: 3 }
    ]

    this.tierOptions = [
      { name: "Any",value: "any"},
      { name: "Junior",value: "junior"},
      { name: "Executive",value: "executive" },
      { name: "Presidential",value: "presidential"}
    ]
  }


  search() {

    if(this.tier == undefined){this.tier = "none"}
    if(this.numberOfBeds == undefined){this.numberOfBeds = 0}
    if(this.minPrice == undefined){this.minPrice = 0}
    if(this.maxPrice == undefined){this.maxPrice = 0}
    if(this.startDate == ""){
      this.startDate = format(new Date(), 'yyyy-MM-dd')
    }
    if(this.endDate == ""){
      this.endDate = format(new Date(), 'yyyy-MM-dd')
    }

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

    setTimeout(()=> {
      document.getElementById("roomsList")?.scrollIntoView({behavior:'smooth'});
      },200)
  }
}
