import { Component, OnInit } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';
import { OccupationRating,Occupation,RatingFactor } from '../models/occupation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculate-monthly-premium',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './calculate-monthly-premium.component.html',
  styleUrl: './calculate-monthly-premium.component.css'
})
export class CalculateMonthlyPremiumComponent implements OnInit {
  constructor(private fb:FormBuilder) {
    this.MonthlyPremiumForm=this.fb.group({
      name:['',Validators.required],
      age_NextBday:['',Validators.required],
      MemberDob:['',Validators.required],
      occupation:['',Validators.required],
      sumInsured:['',Validators.required]
    })
   }
   occupations:Occupation[]=[
    {name:"Cleaner",rating:OccupationRating.Cleaner,factor:RatingFactor[OccupationRating.Cleaner]},
    {name:"Doctor",rating:OccupationRating.Doctor,factor:RatingFactor[OccupationRating.Doctor]},
  {name:"Author",rating:OccupationRating.Author,factor:RatingFactor[OccupationRating.Author]},
  {name:"Farmer",rating:OccupationRating.Farmer,factor:RatingFactor[OccupationRating.Farmer]},
  {name:"Mechanic",rating:OccupationRating.Mechanic,factor:RatingFactor[OccupationRating.Mechanic]},
  {name:"Florist",rating:OccupationRating.Florist,factor:RatingFactor[OccupationRating.Florist]},
  {name:"Other",rating:OccupationRating.other,factor:RatingFactor[OccupationRating.other]}
   
  ];
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
onSubmit(){
  console.log(this.MonthlyPremiumForm.value);
}
OnOccupationChange(event:any){
  console.log(event.target.value);
}
MonthlyPremiumForm: any;

}
