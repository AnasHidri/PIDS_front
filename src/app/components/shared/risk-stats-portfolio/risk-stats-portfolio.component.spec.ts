import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskStatsPortfolioComponent } from './risk-stats-portfolio.component';

describe('RiskStatsPortfolioComponent', () => {
  let component: RiskStatsPortfolioComponent;
  let fixture: ComponentFixture<RiskStatsPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskStatsPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskStatsPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
