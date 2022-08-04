import { Component, OnInit, Input } from '@angular/core';
import {Room} from "../model/Room";
import {Router} from '@angular/router'
import { RoomApiService } from '../room-api.service';
import { SearchComponent } from "../search/search.component"

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {
  title = 'Hotel-Reservation';
  roomApiService :RoomApiService;
  allRooms :Array<Room> = [];

  @Input() startDate: string = ""
  @Input() endDate: string = ""

  @Input() room :Room = new Room();

  constructor(roomApiService :RoomApiService, private router:Router) { 
    this.roomApiService = roomApiService;
  }

  goToPage(pageName:string) : void {
    this.router.navigate([`/reserve`])
  }


  ngOnInit(): void {
    this.roomApiService.findAll().subscribe(resp => this.allRooms = resp);
  }

  checkTierJunior(tier: string): boolean{
    if(tier == "junior"){return true}
    else{return false}
  }
  checkTierExecutive(tier: string): boolean{
    if(tier == "executive"){return true}
    else{return false}
  }
  checkTierPresidential(tier: string): boolean{
    if(tier == "presidential"){return true}
    else{return false}
  }
}
