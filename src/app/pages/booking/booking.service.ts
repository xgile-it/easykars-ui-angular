import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
  })
export class BookingService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8686/api/v3/bookings';
	// userUrl = '/api';

    createBooking(booking: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, booking);
    }

}
