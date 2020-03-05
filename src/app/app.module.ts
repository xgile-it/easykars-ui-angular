import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { EnquiryComponent } from "./pages/enquiry/enquiry.component";
import { VehicleComponent } from "./pages/vehicle/vehicle.component";
import { OffersComponent } from "./pages/offers/offers.component";
import { RentalcarsComponent } from "./pages/rentalcars/rentalcars.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthHomeComponent } from "./components/authhome/authhome.component";

import { JwtInterceptor } from "./_helpers/jwt.interceptor";
import { ErrorInterceptor } from "./_helpers/error.interceptor";
import { fakeBackendProvider } from "./_helpers/fake-backend";
import { from } from "rxjs";
import { AlertComponent } from "./components/alert/alert.component";
import { AddcarComponent } from './pages/addcar/addcar.component';
import { UsersComponent } from './pages/users/users.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ToastrModule } from 'ngx-toastr';

// tslint:disable-next-line:semicolon

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AdminComponent,
    AuthComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactusComponent,
    EnquiryComponent,
    VehicleComponent,
    OffersComponent,
    RentalcarsComponent,
    ProfileComponent,
    AuthHomeComponent,
    AlertComponent,
    AddcarComponent,
    UsersComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
