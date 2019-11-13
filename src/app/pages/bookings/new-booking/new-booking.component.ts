import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../shared/booking.service';
import { Logger } from 'src/app/pages/core/logger/logger.service';
import { Booking } from '../shared/booking';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})

export class NewBookingComponent implements OnInit {
  title = 'Book Now';
  datesForm: FormGroup;
  personalForm: FormGroup;
  paymentForm: FormGroup;
  termsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private bookingService: BookingService,
    private logger: Logger
  ) { }

  ngOnInit() {
    this.buildDatesForm();
    this.buildPersonalForm();
    this.buildPaymentForm();
    this.buildTermsForm();
  }

  buildDatesForm(): void {
    this.datesForm = this.formBuilder.group({
      'pickupDate': ['', Validators.required],
      'dropoffDate': ['', Validators.required],
    });
  }

  buildPersonalForm(): void {
    this.personalForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'contactNo': ['', Validators.required],
      'address': ['', Validators.required],
      'emailId': ['', [Validators.required, Validators.email] ]
    });
  }

  buildPaymentForm(): void {
    this.paymentForm = this.formBuilder.group({
      'cardHolder': ['', Validators.required],
      'cardNo': ['', Validators.required],
      'expiryDate': ['', Validators.required],
      'cvv': ['', Validators.required],
    });
  }

  buildTermsForm(): void {
    this.termsForm = this.formBuilder.group({
      'agree': ['', Validators.required],
    });
  }
  
  save(){
    if (this.invalidForms()) 
            return;
    const newBooking = this.getBooking();
    this.logger.log(`New Booking: ${newBooking}`);

    this.bookingService.addBooking(newBooking).subscribe(result =>{
      if (result) {
        //go to Booking list page
        this.router.navigate(['/']);
      }
    });
  }
   /**
     * Return true if at least either personForm, dateForm or paymentForm is invalid
     */
    invalidForms(): boolean {
      return (this.datesForm.invalid ||
        this.personalForm.invalid ||
        this.paymentForm.invalid  ||
        this.termsForm.invalid);
}

 /**
     * Return booking instance by combining the following.
     *   personalForm.value => firstName, lastName, contactNo, address and email
     *   datesForm.value => pickupDates, DropoffDate
     *   paymentForm.value => cardHolde, cardNo, expiryDate, cvv
     * termsForm.value => agree 
     */
    getBooking(): Booking {
      return {...this.datesForm.value, ...this.personalForm.value, ...this.paymentForm.value, ...this.termsForm.value};
    }
  }