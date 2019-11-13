import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingListComponent } from './booking-list/booking-list.component';
import { NewBookingComponent } from './new-booking/new-booking.component';


const bookingsRoutes: Routes = [
  //1st Route
  { path: '', component: BookingListComponent},
  //2nd Route
  //
];

@NgModule({
  imports: [RouterModule.forChild(bookingsRoutes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
