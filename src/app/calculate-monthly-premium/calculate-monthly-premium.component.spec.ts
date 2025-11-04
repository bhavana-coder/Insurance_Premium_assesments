import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

import { CalculateMonthlyPremiumComponent } from './calculate-monthly-premium.component';
import { CalculateServiceService } from '../Service/calculate-service.service';

describe('CalculateMonthlyPremiumComponent', () => {
  let component: CalculateMonthlyPremiumComponent;
  let fixture: ComponentFixture<CalculateMonthlyPremiumComponent>;
  let calculateServiceSpy: jasmine.SpyObj<CalculateServiceService>;

  beforeEach(async () => {
    
    const spy = jasmine.createSpyObj('CalculateServiceService', ['calculateMontlyPremium']);

    await TestBed.configureTestingModule({
      declarations: [CalculateMonthlyPremiumComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: CalculateServiceService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculateMonthlyPremiumComponent);
    component = fixture.componentInstance;

    
    calculateServiceSpy = TestBed.inject(
      CalculateServiceService
    ) as jasmine.SpyObj<CalculateServiceService>;

    fixture.detectChanges();
  });

  it('should calculate premium correctly', () => {
    component.MonthlyPremiumForm.setValue({
      name: 'John',
      age_NextBday: 30,
      MemberDob: '1995-01-01',
      slectedValue: 'Professional',
      sumInsured: 500000
    });

    
    calculateServiceSpy.calculatemonthlyPremium.and.returnValue(of(270000));

    // Trigger form submission
    component.onSubmit();

    expect(component.monthlyPremium).toBe(270000);
  });
});
