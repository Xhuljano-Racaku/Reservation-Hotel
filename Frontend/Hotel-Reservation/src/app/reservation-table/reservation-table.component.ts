import { Component, OnInit } from '@angular/core';
import {Reservation} from "../model/Reservation";
import {ReservationApiService} from "../reservation-api.service";

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.css']
})
export class ReservationTableComponent implements OnInit {

  editingReservation :boolean = false;
  editReservationIndex :number = -1;
  selectedReservation :Reservation = new Reservation();


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

  cancelReservation(id :number){
    let confirmation = confirm("Are you sure you want to cancel this reservation?");

    if(confirmation) {
      console.log("cancel id: " + id)
    this.reservationApiService.delete(id).subscribe(() => {
      if(id != null){
        this.reservations = this.reservations.filter( reservation => reservation.reservationId != id);
      }
    });
    }
  }

  viewButton(index :number){
    this.editingReservation = true;
    this.editReservationIndex = index;
    this.selectedReservation = this.reservations[index]
    console.log(this.selectedReservation)
  }

  updateButton(reservation :Reservation){
    this.editingReservation = false;
    this.editReservationIndex = -1;
    console.log(this.selectedReservation)
    this.reservationApiService.update(this.selectedReservation).subscribe()
  }


}
