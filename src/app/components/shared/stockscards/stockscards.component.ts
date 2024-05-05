import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

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

  dataBIAT: any[] = [];
  dataAB: any[] = [];
  dataBH: any[] = [];
  dataBT: any[] = [];

  percentages: number[] = [0, 0, 0, 0]; // Initialize with zeros

  constructor(private portfolioService:PortfolioServiceService) { }

  ngOnInit(): void {
    this.getDataAndCalculatePercentageChange("BIAT", this.dataBIAT, 0);
    this.getDataAndCalculatePercentageChange("AB", this.dataAB, 1);
    this.getDataAndCalculatePercentageChange("STB", this.dataBH, 2);
    this.getDataAndCalculatePercentageChange("BT", this.dataBT, 3);
  }

  getDataAndCalculatePercentageChange(bank: string, data: any[], index: number) {
    this.portfolioService.getLastData(bank).subscribe({
      next: res => {
        data = res.slice(-10);
       
        this.percentages[index] = this.calculatePercentageChange(data);
      }
    });
  }

  calculatePercentageChange(data: any[]) {
    const lastRow = data[data.length - 1];
    const secondToLastRow = data[data.length - 2];
    
    const closePriceLastRow = lastRow.close;
    const closePriceSecondToLastRow = secondToLastRow.close;

    const percentageChange = ((closePriceLastRow - closePriceSecondToLastRow) / closePriceSecondToLastRow) * 100;

    const roundedPercentageChange = Math.round(percentageChange * 1000) / 1000;

    return roundedPercentageChange;


  }
}