import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { AboutComponent } from "./pages/about/about.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AdminComponent } from "./layouts/admin/admin.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactusComponent } from "src/app/pages/contactus/contactus.component";
import { AuthComponent } from "src/app/layouts/auth/auth.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { CommonModule } from "@angular/common";
import { VehicleComponent } from "./pages/vehicle/vehicle.component";
import { EnquiryComponent } from "./pages/enquiry/enquiry.component";
import { OffersComponent } from "./pages/offers/offers.component";
import { RentalcarsComponent } from "./pages/rentalcars/rentalcars.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { AuthGuard } from "src/app/_guards/auth.guard";
import { AddcarComponent } from "./pages/addcar/addcar.component";
import { UsersComponent } from "./pages/users/users.component";
import { BookingComponent } from "./pages/booking/booking.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      { path: "", component: HomeComponent, pathMatch: "full" },

      { path: "about", component: AboutComponent },
      { path: "contactus", component: ContactusComponent },

      { path: "enquiry", component: EnquiryComponent },
      { path: "offers", component: OffersComponent },
      { path: "rentalcars", component: RentalcarsComponent }
    ]
  },
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "profile",
        component: ProfileComponent
      },

      { path: "vehicle", component: VehicleComponent },
      { path: "users", component: UsersComponent },
      { path: "booking", component: BookingComponent },
      { path: "addcar", component: AddcarComponent },
      { path: "**", redirectTo: "dashboard" }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },

  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
