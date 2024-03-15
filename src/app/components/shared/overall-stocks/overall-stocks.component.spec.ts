import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStocksComponent } from './overall-stocks.component';

describe('OverallStocksComponent', () => {
  let component: OverallStocksComponent;
  let fixture: ComponentFixture<OverallStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
