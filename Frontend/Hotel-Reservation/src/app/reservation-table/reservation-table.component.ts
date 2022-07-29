import { Component, OnInit } from '@angular/core';
import {Reservation} from "../model/Reservation";

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.css']
})
export class ReservationTableComponent implements OnInit {

  reservations :Array<Reservation> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
