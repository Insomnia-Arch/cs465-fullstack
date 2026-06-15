import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../models/trip';
import { TripCard } from '../trip-card/trip-card';
import { TripData } from '../services/trip-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListingComponent implements OnInit {

  trips = signal<Trip[]>([]);
  message = signal('');

  constructor(
    private tripData: TripData,
    private router: Router
  ) {
    console.log('TripListingComponent constructor');
  }

  public addTrip(): void {
    this.router.navigate(['/add-trip']);
  }

  private getStuff(): void {
    this.tripData.getTrips().subscribe({
      next: (value: Trip[]) => {
        this.trips.set(value);

        if (value.length > 0) {
          this.message.set('There are ' + value.length + ' trips available.');
        } else {
          this.message.set('There were no trips retrieved from the database.');
        }

        console.log(this.message());
      },
      error: (error: any) => {
        console.log('Error: ', error);
      }
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}