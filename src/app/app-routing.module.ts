import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from 'src/app/pages/contactus/contactus.component';
import { AuthComponent } from 'src/app/layouts/auth/auth.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './pages/booking/booking.component';


const routes: Routes = [
  {
    path:'',
    component:AuthComponent,
    children:[
      {path:'',component:HomeComponent,pathMatch:'full'},
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'about',component:AboutComponent},
      {path:'contactus',component:ContactusComponent},
      {path: 'booking' , component:BookingComponent}
    ]

  },
  {
    path:'',
    component:AdminComponent,
    children:[
     { path:'dashboard', component:DashboardComponent, pathMatch:'full'}
       ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }