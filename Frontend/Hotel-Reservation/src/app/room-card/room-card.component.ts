import { Component, OnInit, Input } from '@angular/core';
import {Room} from "../model/Room";

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input() room :Room = new Room();

  constructor() { }

  ngOnInit(): void {
  }

}
