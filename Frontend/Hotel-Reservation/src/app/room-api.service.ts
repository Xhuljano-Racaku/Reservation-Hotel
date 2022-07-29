import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomApiService {

  http: HttpClient
  baseUrl: string = "http://localhost:8080/rooms"

  constructor(http: HttpClient) {
    this.http = http
  }

  findAll(): Observable<any>{
    return this.http.get(`${this.baseUrl}`).pipe(catchError(this.handleError))
  }

  findByPrice(bottom: number, top: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/price/${bottom}_${top}`).pipe(catchError(this.handleError))
  }

  findByTier(tier: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/tier/${tier}`).pipe(catchError(this.handleError))
  }

  findByBeds(beds: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/beds/${beds}`).pipe(catchError(this.handleError))
  }

  findByAvailability(start: string, end: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/available/${start}_${end}`).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse){
    console.log(error)
    return throwError(() => {
      throw new Error()
    })
  }
}
