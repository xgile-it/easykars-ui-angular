import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from './booking';
import { BookingService } from './booking.service';




@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  animations:[]
})
export class BookingComponent implements OnInit {

  booking: Booking = new Booking();
  submitted = false;

  public show_dialog : boolean = false;
  public button_name : any = 'Show Payment Form!';

  constructor(private router: Router, private bookingService: BookingService) { }

  ngOnInit() {
  }

  toggle() {
    this.show_dialog = !this.show_dialog;

    // CHANGE THE TEXT OF THE BUTTON.
    if(this.show_dialog) 
      this.button_name = "Hide Payment Form!";
    else
      this.button_name = "Show Payment Form!";
  }

  newBooking(): void {
    this.submitted = false;
    this.booking = new Booking();
  }

  save() {
    this.bookingService.createBooking(this.booking)
      .subscribe(data => console.log(data), error => console.log(error));
    this.booking = new Booking();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
