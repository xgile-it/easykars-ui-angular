import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Booking } from '../shared/booking';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent {
    title = 'Edit Booking';
    form: FormGroup;

  constructor(private dialogRef: MatDialogRef<BookingDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public booking: Booking) { }
    
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
      this.form = new FormGroup({
        id: new FormControl(this.booking.id),
        pickupDate: new FormControl(this.booking.pickupDate, Validators.required),
        dropoffDate: new FormControl(this.booking.dropoffDate, Validators.required),
        firstName: new FormControl(this.booking.firstName, Validators.required),
        lastName: new FormControl(this.booking.lastName, Validators.required),
        contactNo: new FormControl(this.booking.contactNo, Validators.required),
        address: new FormControl(this.booking.address, Validators.required),
        emailId: new FormControl(this.booking.emailId, Validators.required),
        cardHolder: new FormControl(this.booking.contactNo, Validators.required),
        cardNo: new FormControl(this.booking.cardNo, Validators.required),
        expiryDate: new FormControl(this.booking.expiryDate, Validators.required),
        cvv: new FormControl(this.booking.cvv, Validators.required),
        agree: new FormControl(this.booking.agree, Validators.required)
      });
  }
  save(){
    if (this.form.invalid){
      return;
    }
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close(null);
  }
}
