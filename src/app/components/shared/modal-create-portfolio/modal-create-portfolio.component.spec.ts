import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreatePortfolioComponent } from './modal-create-portfolio.component';

describe('ModalCreatePortfolioComponent', () => {
  let component: ModalCreatePortfolioComponent;
  let fixture: ComponentFixture<ModalCreatePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreatePortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreatePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
