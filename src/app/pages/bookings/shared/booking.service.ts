import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'
import { Logger, ToastService } from 'src/app/pages/core';
import { Observable } from 'rxjs/Observable';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';
import { Booking } from './booking';
import { from } from 'rxjs';


const httpOptions = {
headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  constructor(
    private http: HttpClient,
    private logger: Logger,
    private toastService: ToastService
  ) { }

  private baseUrl = 'http://localhost:8686/api/v3/bookings';
  private bookingsUrl = `${this.baseUrl}bookings`;

  /** 
     * GET: get all bookings from the database 
     */
    getBookings(): Observable<any> {
      this.logger.log(this.baseUrl);
      return this.http
        .get<Booking[]>(this.baseUrl)
        .pipe(
          tap(_=> this.notify('fetched bookings', 'GET')),
          catchError(this.handleError('getBookings', 'GET'))
        );
   }

   /** 
     * GET: get an existing contact from the database by an id 
     */ 
    getBooking(id: number): Observable<any> {
      const url = `${this.baseUrl}/${id}`;
      return this.http
          .get<Booking>(url)
          .pipe(
              tap(_ => this.notify(`fetched booking id=${id}`, 'GET')),
              catchError(this.handleError(`getBooking id=${id}`, 'GET'))
          );
  }
   /** 
     * POST: add new contact to the database 
     */
    addBooking(booking: Booking): Observable<any> {
      return this.http
        .post<Booking>(this.baseUrl, booking, httpOptions)
        .pipe(
          tap((booking: Booking) => this.notify(`added hero w/ id=${booking.id}`, 'POST')),
          catchError(this.handleError('addBooking', 'POST'))
        );
        }
        /** 
     * PUT: update an existing contact to the database 
     */
    updateBooking(booking:Booking): Observable<any> {
      return this.http
      .put(this.baseUrl, booking, httpOptions)
      .pipe(
        tap(_=> this.notify(`updated booking id=${booking.id}`, 'PUT')),
        catchError(this.handleError('updateBooking', 'PUT'))
      );
    }
    /** 
     * DELETE: delete an existing hero from the database 
     */
    deleteBooking(booking: Booking | number): Observable<any> {
        const id = typeof booking === 'number' ? booking : booking.id;
        const url = `${this.baseUrl}/${id}`;
        return this.http
            .delete<Booking>(url, httpOptions)
            .pipe(
              tap(_=> this.notify(`daleted booking id=${id}`, 'DELETE')),
              catchError(this.handleError('deleteBooking', 'DELETE'))
            );
    }
    
    /**
     * Prepare an error handler for failed HTTP requests.
     * That handler extracts the error message and logs it.
     * It also adds the message to the errors$ observable to which the caller
     * may listen and react.
     * @param operation The name/description of the operation that failed
     * @param method The HTTP method for the failed HTTP request
     */
    protected handleError(operation: string, method: string) {
      return function errorHandler(res: HttpErrorResponse) {
        this.logger.error(res);
        const eMsg = res.message || '' ;
        const error = `${this.entityNamePlural} ${operation} Error${
          eMsg ? ': ' + eMsg : ''
        }`;
        this.notify(error, method);
      }.bind(this);
    }
    protected notify(message: string, method: string) {
      this.toastService.openSnackBar(message, method);
    }
}
