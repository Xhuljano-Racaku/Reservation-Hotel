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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    RoomCardComponent,
    ReservationTableComponent,
    CustomerFormComponent,
    StrictNumberDirective,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
