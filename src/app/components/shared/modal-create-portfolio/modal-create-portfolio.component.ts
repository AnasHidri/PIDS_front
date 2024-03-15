import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-modal-create-portfolio',
  templateUrl: './modal-create-portfolio.component.html',
  styleUrls: ['./modal-create-portfolio.component.css']
})
export class ModalCreatePortfolioComponent {
  formatSliderValue(value: number) {
    return `${value}%`;
  }
}
