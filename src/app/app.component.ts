import { Component } from '@angular/core';

import { CalculateMonthlyPremiumComponent } from "./calculate-monthly-premium/calculate-monthly-premium.component";

@Component({
  selector: 'app-root',
  imports: [ CalculateMonthlyPremiumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'  
})
export class AppComponent {
  title = 'Insurance_Premium';
}
