import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateMonthlyPremiumComponent } from './calculate-monthly-premium.component';

describe('CalculateMonthlyPremiumComponent', () => {
  let component: CalculateMonthlyPremiumComponent;
  let fixture: ComponentFixture<CalculateMonthlyPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateMonthlyPremiumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateMonthlyPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
