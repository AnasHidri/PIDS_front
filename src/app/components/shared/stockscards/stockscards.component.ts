import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stockscards',
  templateUrl: './stockscards.component.html',
  styleUrls: ['./stockscards.component.css']
})
export class StockscardsComponent implements OnInit {

  stocks: any[] = [
    { symbol: 'AAPL', price: 150.25, change: 2.5 },
    { symbol: 'GOOGL', price: 2800.75, change: -1.3 },
    // Add more stock data as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
