import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  tier :String = "";
  startDate :Date = new Date();
  endDate :Date = new Date();
  numberOfBeds :number = 0;
  minPrice :number = 0;
  maxPrice :number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
