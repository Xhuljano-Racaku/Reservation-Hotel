import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject } from 'rxjs';
import {Reservation} from "../model/Reservation";
import {ReservationApiService} from "../reservation-api.service";

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.css']
})
export class ReservationTableComponent implements OnInit {

  private _success = new Subject<string>();
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert | undefined;
  successMessage = '';

  private _cancel = new Subject<string>();
  @ViewChild('selfClosingAlert2', {static: false}) selfClosingAlert2: NgbAlert | undefined;
  cancelMessage = '';

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

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close()
      }
    });

    this._cancel.subscribe(message => this.cancelMessage = message);
    this._cancel.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert2) {
        this.selfClosingAlert2.close()
      }
    });
  }

  search(){
    this.reservationApiService.findByCustomerId(this.id).subscribe(resp => {
      console.log(resp)
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

        this._cancel.next("Reservation was cancelled");
      }
    });
    }
  }

  viewButton(index :number){
    this.editingReservation = true;
    this.editReservationIndex = index;
    this.selectedReservation = this.reservations[index]
    let results :Reservation = new Reservation()

    results.customerId = this.selectedReservation.customerId
    results.startDate = this.selectedReservation.startDate
    results.endDate = this.selectedReservation.endDate
    results.reservationId = this.selectedReservation.reservationId
    results.roomNum = this.selectedReservation.roomNum

    console.log(this.selectedReservation)
  }

  updateButton(reservation :Reservation){
    this.editingReservation = false;
    console.log(this.selectedReservation)
    this.reservationApiService.update(this.selectedReservation).subscribe(resp => {  
      if(resp != null){
        
      }
    })

    this.editReservationIndex = -1;
    this._success.next("Date was succesfully updated");
  }


}
