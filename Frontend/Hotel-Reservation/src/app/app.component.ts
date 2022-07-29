import {Component, OnInit, ViewChild} from '@angular/core';
import {Room} from "./model/Room";
import {RoomApiService} from "./room-api.service";
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hotel-Reservation';

  constructor() {
  }

  ngOnInit(): void {
    
  }
}
