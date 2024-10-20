import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-slot-booking',
  templateUrl: './slot-booking.component.html',
  styleUrls: ['./slot-booking.component.css']
})
export class SlotBookingComponent implements OnInit {
  patientname!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  refreshPage(){
    window.location.reload();
  }
  savedetails(bookingform: NgForm){
    this.patientname=bookingform.form.value.patientname;
    this.router.navigate(['bookings-list'],{queryParams:{data:this.patientname}});
  }
}
