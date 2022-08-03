import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Reservation } from './model/Reservation';

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

   save(reservation: Reservation): Observable<any>{
    return this.http.post(this.baseUrl, reservation).pipe(catchError(this.handleError))
   }

   update(reservation: Reservation){
    return this.http.put(this.baseUrl, reservation).pipe(catchError(this.handleError))
   }

   findByReservationId(id: number){
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

