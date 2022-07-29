import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationTableComponent } from './reservation-table/reservation-table.component';

const routes: Routes = [{
  path: 'reservation-table',
  component: ReservationTableComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
