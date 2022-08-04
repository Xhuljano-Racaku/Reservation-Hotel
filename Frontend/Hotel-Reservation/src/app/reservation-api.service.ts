import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Reservation, } from './model/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationApiService {

  http: HttpClient
  baseUrl: string = "http://localhost:8080/reservation/"

  constructor(http: HttpClient) {
    this.http = http
   }

   findByCustomerId(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}customer/${id}`).pipe(catchError(this.handleError))
   }

   findByCustomerPhone(number: string): Observable<any>{
    return this.http.get(`${this.baseUrl}phone/${number}`).pipe(catchError(this.handleError))
   }

   save(reservation: Reservation): Observable<any>{

    var sDate = new Date(reservation.startDate)
    var eDate = new Date(reservation.endDate)

    var startDateArray = sDate.toLocaleDateString().split("/");
    var endDateArray = eDate.toLocaleDateString().split("/");

    console.log(startDateArray)
    console.log(endDateArray)

    var newStartDate = new Date(parseInt(startDateArray[2]),parseInt(startDateArray[0])-1,parseInt(startDateArray[1]));
    var newEndDate = new Date(parseInt(endDateArray[2]),parseInt(endDateArray[0])-1,parseInt(endDateArray[1]));

    console.log(newStartDate);
    console.log(newEndDate);

    reservation.startDate = newStartDate;
    reservation.endDate = newEndDate;

    return this.http.post(this.baseUrl, reservation).pipe(catchError(this.handleError))
   }

   update(reservation: Reservation): Observable<any>{

      var sDate = new Date(reservation.startDate)
      var eDate = new Date(reservation.endDate)

      var startDateArray = sDate.toLocaleDateString().split("/");
      var endDateArray = eDate.toLocaleDateString().split("/");

      console.log(startDateArray)
      console.log(endDateArray)

      var newStartDate = new Date(parseInt(startDateArray[2]),parseInt(startDateArray[0])-1,parseInt(startDateArray[1]));
      var newEndDate = new Date(parseInt(endDateArray[2]),parseInt(endDateArray[0])-1,parseInt(endDateArray[1]));

      console.log(newStartDate);
      console.log(newEndDate);

      reservation.startDate = newStartDate;
      reservation.endDate = newEndDate;

     return this.http.put(this.baseUrl, reservation).pipe(catchError(this.handleError))
   }

   findByReservationId(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError))
   }

   delete(id :number){
    return this.http.delete(`${this.baseUrl}${id}`).pipe(catchError(this.handleError));
   }

   private handleError(error: HttpErrorResponse){
    console.log(error)
    return throwError(() => {
      throw new Error()
    })
  }


}

