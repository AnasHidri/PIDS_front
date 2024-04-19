import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  transactions: any[] = [
    { stocks: 'AB', price: 0.63, time: '19:04:53' },
    { stocks: 'BNA', price: 0.47, time: '19:04:52' },
    { stocks: 'BT', price: 0.52, time: '19:04:42' },
    { stocks: 'BNA', price: 30.21, time: '19:03:35' },
    { stocks: 'AMEN', price: 131.35, time: '19:03:09' },
    { stocks: 'BH', price: 79.96, time: '19:02:38' },
    { stocks: 'BNA', price: 71.80, time: '19:02:04' },
    { stocks: 'AB', price: 0.63, time: '19:02:02' },
    { stocks: 'BT', price: 0.63, time: '19:02:00' },
    { stocks: 'AMEN', price: 0.06, time: '19:01:59' },
    { stocks: 'BNA', price: 0.57, time: '19:01:59' },
    { stocks: 'AB', price: 85.13, time: '19:01:35' },

    // Add more transactions as needed
  ];

  ngOnInit(): void {
  }

}
