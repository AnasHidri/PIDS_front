import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockscardsComponent } from './stockscards.component';

describe('StockscardsComponent', () => {
  let component: StockscardsComponent;
  let fixture: ComponentFixture<StockscardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockscardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
