import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerApiService } from '../customer-api.service';
import { Customer } from '../model/Customer';

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

  constructor(private service: CustomerApiService, private router: Router) { }

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
  }

  save() : void {
    this.service.save(this.submitForm.value).subscribe(() => {});
  }
}
