import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignTradeComponent } from './design-trade.component';

describe('DesignTradeComponent', () => {
  let component: DesignTradeComponent;
  let fixture: ComponentFixture<DesignTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignTradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
