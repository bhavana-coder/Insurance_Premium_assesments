import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { OccupationRating,Occupation,RatingFactor } from '../models/occupation';
import { CommonModule } from '@angular/common';
import { CalculateServiceService } from '../Service/calculate-service.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-calculate-monthly-premium',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './calculate-monthly-premium.component.html',
  styleUrl: './calculate-monthly-premium.component.css',
 
})
export class CalculateMonthlyPremiumComponent implements OnInit {
  MonthlyPremiumForm!:FormGroup
  monthlyPremium:number=0;
  selectedValue:string='';
  constructor(private fb:FormBuilder,private calculateService:CalculateServiceService) {
    
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
  this.MonthlyPremiumForm=this.fb.group({
      name:['',Validators.required],
      age_NextBday:['',Validators.required],
      MemberDob:['',Validators.required],     
      sumInsured:['',Validators.required,Validators.min(0)]  ,
      slectedValue:['',Validators.required]    
    })
}
onSubmit(){
this.GetmonthlyPremium();
};
GetmonthlyPremium(){
  const selectedValues=
  {
    name:this.MonthlyPremiumForm.get("name")?.value,
    age:this.MonthlyPremiumForm.get("age_NextBday")?.value,
    memberDob:this.MonthlyPremiumForm.get("MemberDob")?.value,
    rating:RatingFactor[this.MonthlyPremiumForm.get("slectedValue")?.value as keyof typeof RatingFactor],
    sumInsured:this.MonthlyPremiumForm.get("sumInsured")?.value    
  }
    this.calculateService.calculatemonthlyPremium(selectedValues).subscribe(data=>{
    this.monthlyPremium=data;
  });
//
};
  
OnOccupationChange(event:any){
  if (this.MonthlyPremiumForm.valid) {
    this.GetmonthlyPremium();
  }
}


}
