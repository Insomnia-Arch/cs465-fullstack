import { Component, signal } from '@angular/core';
//import { CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
//import { TripListingComponent } from './trip-listing/trip-listing.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Travlr Getaways Admin!';
}
