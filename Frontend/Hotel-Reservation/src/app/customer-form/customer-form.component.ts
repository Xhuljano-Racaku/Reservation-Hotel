import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { forkJoin } from 'rxjs';
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

  log(x : any) {
    console.log(x);
  }
  submitForm: FormGroup = new FormGroup({});
  roomNum:number = 0

  startDate: Date = new Date()
  endDate: Date = new Date()

  // Saving the customer and reservation incase we want to display it to the user
  reservation: Reservation = new Reservation()
  customer: Customer = new Customer()
  


  constructor(private service: CustomerApiService, private router: Router, private route: ActivatedRoute, private reservationApi: ReservationApiService) { }

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
    // when router link gets called it passes the room number, and reservation dates
    this.route.queryParams.subscribe(params => {
      this.roomNum = params['roomNum']
      this.startDate = params['startDate']
      this.endDate = params['endDate']
    })
    console.log(this.startDate)
    console.log(this.endDate)
    console.log(this.roomNum)
  }

  save() : void {
    
    // Save the customer so we can generate the customer ID
    // We need to have a way to get customer ID of already existing customer
    this.service.save(this.customer).subscribe(resp => {
      this.customer = resp

      // set the reservation customerid to the generated customer id
      this.reservation.customerId = this.customer.customerId

      // set the rest of the reservation data from the data passed by room card
      this.reservation.roomNum = this.roomNum
      this.reservation.startDate = this.startDate
      this.reservation.endDate = this.endDate

      this.reservationApi.save(this.reservation).subscribe(resp => {
        this.reservation = resp
      })
    });
    
    
  }
}
