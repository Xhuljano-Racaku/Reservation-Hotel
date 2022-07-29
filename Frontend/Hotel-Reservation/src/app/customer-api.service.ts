import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from './model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  http: HttpClient
  baseUrl: string = "http://localhost:8080/customers/"
  constructor(http: HttpClient) {
    this.http = http
   }

   findById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/id/${id}`).pipe(catchError(this.handleError))
   }

   findByName(name: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/name/${name}`).pipe(catchError(this.handleError))
   }

   findByPhone(phone: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/phone/${phone}`).pipe(catchError(this.handleError))
   }

   save(customer: Customer){
    return this.http.post(this.baseUrl, customer).pipe(catchError(this.handleError))
   }

   update(customer: Customer){
    return this.http.put(this.baseUrl, customer).pipe(catchError(this.handleError))
   }

   delete(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError))
   }

   private handleError(error: HttpErrorResponse){
    console.log(error)
    return throwError(() => {
      throw new Error() 
    })
  }
}
