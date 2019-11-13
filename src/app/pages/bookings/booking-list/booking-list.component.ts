import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { BookingService } from '../shared/booking.service';
import { Booking } from '../shared/booking';
import { BookingDetailComponent } from '../booking-detail/booking-detail.component';
import { Logger } from 'src/app/pages/core/logger/logger.service';
import { ConfirmedDialogComponent } from 'src/app/pages/shared/dialogs';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  displayedColumns: string[];
  dataSource = new MatTableDataSource();
  screenHeight: any;
  screenWidth: any;

  @ViewChild('MatPagination' ,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort ,{static: false}) sort: MatSort;

  @HostListener('window:resize', ['$event'])
    onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.logger.log(`Resize() height: ${this.screenHeight}; width: ${this.screenWidth}`);
    this.setDisplayedColumns();
}
  
  constructor (
  private bookingService: BookingService, 
  private logger: Logger, 
  private dialog: MatDialog) {

  this.screenHeight = window.screen.height;
  this.screenWidth = window.screen.width;
  this.logger.log(`Init() height: ${this.screenHeight}; width: ${this.screenWidth}`);
  this.setDisplayedColumns(); }


  ngOnInit() {
    this.loadBookings();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
 
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
 
    loadBookings() {
        this.bookingService.getBookings().subscribe(data => {
            this.dataSource.data = data;
        });
    }

    editBooking(id: number): void {
        this.bookingService.getBooking(id).subscribe(data =>{
          const dialogConfig = new MatDialogConfig();
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.height = '300px';
            dialogConfig.width = '450px';
            dialogConfig.data = data;

            const dialogRef = this.dialog.open(BookingDetailComponent, dialogConfig);
            dialogRef.afterClosed().subscribe(result => {
                if (!result) {
                    return;
                }
            this.bookingService.updateBooking(result)
                .subscribe(_=> this.loadBookings());
        });
    });
  }
  deleteBooking(booking: Booking): void {
      // Create configuration for the dialog
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.height = '200px';
      dialogConfig.width = '400px';
      dialogConfig.data = { 
          title: `Delete  ${booking.firstName} ${booking.lastName}`,
          message: 'Are you sure?'
      };

      const dialogRef = this.dialog.open(ConfirmedDialogComponent, dialogConfig);
 
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource.data = this.dataSource.data.filter(e => e != booking);
                this.bookingService.deleteBooking(booking).subscribe();
            }
        });
    }
    getBookedDates(booking: Booking) : string {
        return `${booking.pickupDate} ${booking.dropoffDate}`;
    }

    getFullName(booking: Booking) : string {
      return `${booking.firstName} ${booking.lastName}`;
  }
  getContactDetails(booking: Booking) : string {
    return `${booking.contactNo} ${booking.emailId}`;
}
getPaymentDetails(booking: Booking) : string {
    return `${booking.cardHolder} ${booking.cardNo}, ${booking.expiryDate}, ${booking.cvv}`;
}

 /**
     * Update a list of table columns to be displayed based on the width of the screen.
     */
    setDisplayedColumns() {
      if (this.screenWidth < 420) {
          this.displayedColumns = ['id', 'fullName', 'contactDetails', 'action'];
      }
      else if (this.screenWidth >= 420 && this.screenWidth <= 800) {
          this.displayedColumns = ['id', 'fullName', 'contactDetails', 'address', 'terms', 'action'];
      }
      else {
          this.displayedColumns = ['id', 'fullName', 'contactDetails', 'address', 'paymentDetails', 'action'];
      }
  }
}