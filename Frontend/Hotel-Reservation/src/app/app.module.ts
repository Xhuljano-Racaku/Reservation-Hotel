import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RoomCardComponent } from './room-card/room-card.component';
import { ReservationTableComponent } from './reservation-table/reservation-table.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { StrictNumberDirective } from './StrictNumberDirective';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    RoomCardComponent,
    ReservationTableComponent,
    CustomerFormComponent,
    StrictNumberDirective,
    PagenotfoundComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputNumberModule,
    CalendarModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
