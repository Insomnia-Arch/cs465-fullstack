import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule }
from "@angular/forms";
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';


@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css',
})
export class EditTrip implements OnInit {
  public editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private tripData: TripData,
    private router: Router
  ) {}

  ngOnInit(): void {
    let tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert("something wrong couldn't find that trip");
      this.router.navigate(['']);
      return;
    }
    console.log('EditTrip::ngonInit');
    console.log('tripCode: ' + tripCode);
    this.editForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.tripData.getTrip(tripCode).subscribe({
      next: (value: Trip) => {
        console.log(value);
        this.editForm.patchValue(value);
      },
      error: (error: any) => {
        console.log('Error: ', error);
      }
    });
  }

  public onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.tripData.updateTrip(this.editForm.value.code, this.editForm.value)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }
}

