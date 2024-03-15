import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCardsComponent } from './portfolio-cards.component';

describe('PortfolioCardsComponent', () => {
  let component: PortfolioCardsComponent;
  let fixture: ComponentFixture<PortfolioCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
