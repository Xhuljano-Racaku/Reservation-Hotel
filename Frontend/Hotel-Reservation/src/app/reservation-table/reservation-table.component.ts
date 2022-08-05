import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { format } from 'date-fns';
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

  private _error = new Subject<string>();
  @ViewChild('selfClosingAlert3', {static: false}) selfClosingAlert3: NgbAlert | undefined;
  errorMessage = '';

  @Input() startDate: string = ""
  @Input() endDate: string = ""

  editingReservation :boolean = false;
  editReservationIndex :number = -1;
  selectedReservation :Reservation = new Reservation();


  reservationApiService :ReservationApiService;
  reservations :Array<Reservation> = [];

  number: number = 0
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

    this._error.subscribe(message => this.errorMessage = message);
    this._error.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert3) {
        this.selfClosingAlert3.close()
      }
    });
  }

  search(){
    this.reservationApiService.findByCustomerPhone(this.number.toString()).subscribe(resp => {
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
    this.editReservationIndex = -1;
    this.editingReservation = true;
    this.editReservationIndex = index;
    this.selectedReservation = this.reservations[index]
    console.log(this.selectedReservation)
  }

  updateButton(){
    this.editingReservation = false;
    console.log(this.selectedReservation)
    this.reservationApiService.update(this.selectedReservation).subscribe(resp => { },
      err => {
        console.log("error")
        this._error.next("End date cannot be before or same as start date");
      },
      () => {
          this._success.next("Date was succesfully updated");
         })
  }
}
