import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseURL="http://localhost:8080/api/v1/bookings";

  constructor(private httpClient: HttpClient) { }
  getbookingslist(): Observable<Booking[]>{
    return this.httpClient.get<Booking[]>(`${this.baseURL}`);
  }
  updatebooking(id:number,booking:Booking): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,booking);
  }
  deleteBooking(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
