import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReservationTableComponent } from './reservation-table/reservation-table.component';
import { RoomCardComponent } from './room-card/room-card.component';

const routes: Routes = [{
  path: '', component: RoomCardComponent
},
 
{
    path: 'reservation-table', component: ReservationTableComponent
},

{
  path: 'reserve', component: CustomerFormComponent
},

{
  path: '**', component: PagenotfoundComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
