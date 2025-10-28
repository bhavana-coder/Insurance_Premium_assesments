import { RouterModule, Routes } from '@angular/router';
import { CalculateMonthlyPremiumComponent } from './calculate-monthly-premium/calculate-monthly-premium.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: CalculateMonthlyPremiumComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
    })

export class AppRoutingModule {}