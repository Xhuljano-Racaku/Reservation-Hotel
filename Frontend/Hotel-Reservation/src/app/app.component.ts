import {Component, OnInit} from '@angular/core';
import {Room} from "./model/Room";
import {RoomApiService} from "./room-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hotel-Reservation';
  roomApiService :RoomApiService;
  allRooms :Array<Room> = [];

  constructor(roomApiService :RoomApiService) {
    this.roomApiService = roomApiService;
  }

  ngOnInit(): void {
    this.roomApiService.findAll().subscribe(resp => this.allRooms = resp);
  }
}
