import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingListComponent } from './booking-list/booking-list.component';
import { SlotBookingComponent } from './slot-booking/slot-booking.component';

const routes: Routes = [
  {path:'bookings', component:SlotBookingComponent},
  {path:'bookings-list', component:BookingListComponent},
  {path:'', redirectTo:'/bookings',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
