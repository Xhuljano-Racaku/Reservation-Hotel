import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotel';

  constructor() {}

  ngOnInit() {

  }

  showResTable(){

  }

}
// import {Component, OnInit, ViewChild} from '@angular/core';
// import {Room} from "./model/Room";
// import {RoomApiService} from "./room-api.service";
// import { SearchComponent } from './search/search.component';
// import {Router} from "@angular/router"

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'Hotel-Reservation';
//   roomApiService :RoomApiService;
//   allRooms :Array<Room> = [];

//   constructor(roomApiService :RoomApiService, private router:Router) {
//     this.roomApiService = roomApiService;
//   }

//   ngOnInit(): void {
//     this.roomApiService.findAll().subscribe(resp => this.allRooms = resp);
//   }
// }
