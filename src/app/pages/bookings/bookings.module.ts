import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { SharedModule } from 'src/app/pages/shared/shared.module';
import { MaterialFormsModule } from 'src/app/pages/shared/forms/material-forms.module';
import { BookingService } from './shared/booking.service';


@NgModule({
  declarations: [
    BookingDetailComponent,
    BookingListComponent
  ],
  imports: [
   
    BookingsRoutingModule,
    SharedModule,
    MaterialFormsModule
  ],
  providers: [BookingService],

  entryComponents:[BookingDetailComponent]
})
export class BookingsModule { }
