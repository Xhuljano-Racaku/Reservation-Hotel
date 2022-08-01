import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // display: boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // goToReservationDisplay(): void{
  //   this.router.navigate(['reservation-table'])
  // }

  // show(){
  //   if(this.display == false) this.display = true
  //   else this.display = false
  // }
}
