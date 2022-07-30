import { Component, OnInit, Input } from '@angular/core';
import {Room} from "../model/Room";
import {Router} from '@angular/router'
import { RoomApiService } from '../room-api.service';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {
  title = 'Hotel-Reservation';
  roomApiService :RoomApiService;
  allRooms :Array<Room> = [];

  @Input() room :Room = new Room();

  constructor(roomApiService :RoomApiService, private router:Router) { 
    this.roomApiService = roomApiService;
  }

  goToPage(pageName:string) : void {
    this.router.navigate([`/reserve`])
  }

  ngOnInit(): void {
    // this.roomApiService.findAll().subscribe(resp => this.allRooms = resp);
  }
}
