import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Room } from '../model/Room';
import { RoomApiService } from '../room-api.service';
import {forkJoin, Subject} from "rxjs";
import { AppComponent } from '../app.component';
import { compareAsc, format } from 'date-fns'
import { debounceTime } from 'rxjs';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  private _error = new Subject<string>();
  @ViewChild('selfClosingAlert3', {static: false}) selfClosingAlert3: NgbAlert | undefined;
  errorMessage = '';

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

  constructor(roomApi: RoomApiService, private router: Router) {
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

    this._error.subscribe(message => this.errorMessage = message);
    this._error.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert3) {
        this.selfClosingAlert3.close()
      }
    });
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

    if(this.startDate >= this.endDate) {

      console.log("error")
      this._error.next("End date cannot be before or same as start date");
      this.router.navigate(['/']);
    }

    else if (this.minPrice > this.maxPrice) {
      this._error.next("Min price can not be bigger than max price");
    }
    
    else {

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

          setTimeout(()=> {
            document.getElementById("roomsList")?.scrollIntoView({behavior:'smooth'});
            },200)
          })
          }
}
}
