import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-trade',
  templateUrl: './design-trade.component.html',
  styleUrls: ['./design-trade.component.css']
})
export class DesignTradeComponent implements OnInit {

  constructor() { }
  transactions: any[] = [
    { stocks: -533.00, price: 0.63, time: '19:04:53' },
    { stocks: 532.50, price: 0.47, time: '19:04:52' },
    { stocks: -532.00, price: 0.52, time: '19:04:42' },
    { stocks: -532.00, price: 30.21, time: '19:03:35' },
    { stocks: 530.00, price: 131.35, time: '19:03:09' },
    { stocks: -530.00, price: 79.96, time: '19:02:38' },
    { stocks: -530.50, price: 71.80, time: '19:02:04' },
    { stocks: -529.00, price: 0.63, time: '19:02:02' },
    { stocks: 529.00, price: 0.63, time: '19:02:00' },
    { stocks: -529.00, price: 0.06, time: '19:01:59' },
    { stocks: 529.50, price: 0.57, time: '19:01:59' },
    { stocks: 530.50, price: 85.13, time: '19:01:35' },

    // Add more transactions as needed
  ];

  ngOnInit(): void {
  }

}
