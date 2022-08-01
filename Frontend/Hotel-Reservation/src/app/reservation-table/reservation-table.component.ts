import { Component, OnInit } from '@angular/core';
import {Reservation} from "../model/Reservation";
import {ReservationApiService} from "../reservation-api.service";

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.css']
})
export class ReservationTableComponent implements OnInit {

  reservationApiService :ReservationApiService;
  reservations :Array<Reservation> = [];
  id: number = 0
  router: any;

  constructor(reservationApiService :ReservationApiService) {
    this.reservationApiService = reservationApiService;
  }

  ngOnInit(): void {
    
  }

  search(){
    this.reservationApiService.findByCustomerId(this.id).subscribe(resp => {
      this.reservations = [];
      this.reservations = resp;
    })
  }
}
