import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-modal-create-portfolio',
  templateUrl: './modal-create-portfolio.component.html',
  styleUrls: ['./modal-create-portfolio.component.css']
})
export class ModalCreatePortfolioComponent {
  allocations = [
    { ticker: 'BNA', capitalPercentMin: 5, capitalPercentMax: 10 },
    { ticker: 'ATB', capitalPercentMin: 1, capitalPercentMax: 4 }
    // Add more allocation objects if needed
  ];

  fees = [
    { type: 'fixed', value: 4 },
    { type: 'real', value: 3 }
    // Add more fee objects if needed
  ];
  allocationOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
  feese: string[] = ['fees 1', 'fees 2', 'fees 3'];

  formatSliderValue(value: number) {
    return `${value}%`;
  }
}
