import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSerializer } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';



@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings!: Booking[];
  patientname!:string;
  constructor(private bookingservice:BookingService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
    console.log(params)
    this.patientname=params.data
  });
    this.getbookings();
  }
  onbooking(id:number,booking:Booking){
    if(booking.status=="Free"){
      booking.status="Booked";
      this.bookingservice.updatebooking(id,booking);
    }
    else if(booking.status=="Booked"){
      booking.status="OverBooked";
      this.bookingservice.updatebooking(id,booking);
    }
    else{
      alert("Booking not available");
    }
  }
  deleteBooking(id:number){
    this.bookingservice.deleteBooking(id).subscribe(data=>{
      console.log(data)
    });
    this.getbookings();
  }
  getbookings(){
    this.bookingservice.getbookingslist().subscribe(data=>{
      this.bookings=data;
    });
  }


}
