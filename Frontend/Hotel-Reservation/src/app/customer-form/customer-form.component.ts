import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject, debounceTime } from 'rxjs';
import { CustomerApiService } from '../customer-api.service';
import { Customer } from '../model/Customer';
import { Reservation } from '../model/Reservation';
import { ReservationApiService } from '../reservation-api.service';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  private _success = new Subject<string>();
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert | undefined;
  successMessage = '';

  private _error = new Subject<string>();
  @ViewChild('selfClosingAlert3', {static: false}) selfClosingAlert3: NgbAlert | undefined;
  errorMessage = '';

  log(x : any) {
    console.log(x);
  }
  submitForm: FormGroup= new FormGroup({});
  roomNum:number = 0

  startDate: Date = new Date()
  endDate: Date = new Date()

  // Saving the customer and reservation incase we want to display it to the user
  reservation: Reservation = new Reservation()
  customer: Customer = new Customer()



  constructor(private service: CustomerApiService, private route: ActivatedRoute, private reservationApi: ReservationApiService) { }

  get firstName() {
    return this.submitForm.get('firstName');
    }

    get lastName() {
    return this.submitForm.get('lastName');
    }

    get phone() {
    return this.submitForm.get('phone');
    }

  ngOnInit(): void {

    this.submitForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required)
    })

    // when router link gets called it passes the room number, and reservation dates
    this.route.queryParams.subscribe(params => {
      this.roomNum = params['roomNum']
      this.startDate = params['startDate']
      this.endDate = params['endDate']
    })
    console.log(this.startDate)
    console.log(this.endDate)
    console.log(this.roomNum)

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close()
      }
    });

    this._error.subscribe(message => this.errorMessage = message);
    this._error.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert3) {
        this.selfClosingAlert3.close()
      }
    });
  }

  save() : void {
    // Save the customer so we can generate the customer ID
    // We need to have a way to get customer ID of already existing customer
    this.service.save(this.submitForm.value).subscribe(resp => {
      this.customer = resp
      this.submitForm.reset();

      // set the reservation customerid to the generated customer id
      this.reservation.customerId = this.customer.customerId

      // set the rest of the reservation data from the data passed by room card
      this.reservation.roomNum = this.roomNum
      this.reservation.startDate = this.startDate
      this.reservation.endDate = this.endDate

      this.reservationApi.save(this.reservation).subscribe(resp => {
        this.reservation = resp;
      },
      err => {
        this._error.next("Conflicting reservation, Can not process reservation");
      },
      () => {
        console.log("here")
        this._success.next("Reservation successfully created");
      })
    },
    err => {
      this._error.next("Unexpected Error");
    });


  }
}
