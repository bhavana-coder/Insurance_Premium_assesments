import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CalculateMonthlyPremiumComponent } from "./calculate-monthly-premium/calculate-monthly-premium.component";
import { AppRoutingModule } from "./app.routes"; 

@NgModule({
  declarations: [
       
        
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CalculateMonthlyPremiumComponent,
HttpClientModule,

AppRoutingModule
],
providers:[],
bootstrap:[]

})
export class AppModule { }