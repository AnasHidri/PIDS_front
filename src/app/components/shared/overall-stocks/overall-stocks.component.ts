import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-overall-stocks',
  templateUrl: './overall-stocks.component.html',
  styleUrls: ['./overall-stocks.component.css']
})
export class OverallStocksComponent implements OnInit {

  assets = [
    { action: 'Buy', stocks: 'ABC', risquePercentage: 10, value: 1000 },
    { action: 'Sell', stocks: 'XYZ', risquePercentage: 15, value: 1500 },
    { action: 'Hold', stocks: 'DEF', risquePercentage: 8, value: 1200 },
    { action: 'Buy', stocks: 'GHI', risquePercentage: 12, value: 800 },
    { action: 'Sell', stocks: 'JKL', risquePercentage: 18, value: 2000 },
    { action: 'Hold', stocks: 'MNO', risquePercentage: 5, value: 1300 },
    { action: 'Buy', stocks: 'PQR', risquePercentage: 14, value: 900 },
    { action: 'Sell', stocks: 'STU', risquePercentage: 20, value: 1800 },
    { action: 'Hold', stocks: 'VWX', risquePercentage: 7, value: 1100 },
    { action: 'Buy', stocks: 'YZA', risquePercentage: 11, value: 950 },
  ];
  data: any[] = [];
  selectedBank: string = 'BT';
  banks: string[] = [];
  
  constructor(private portfolioService:PortfolioServiceService) { }

  ngOnInit(): void {
    this.getDataAndCalculatePercentageChange("BT");

    this.portfolioService.getNames().subscribe({
      next: res => {
        console.log(res);
        this.banks = res.csv_filenames;
      }
    });
  }

  getDataAndCalculatePercentageChange(bank: string) {
    this.portfolioService.getLastData(bank).subscribe({
      next: res => {
        this.data = res.slice(-10);
        console.log(this.data);
      }
    });
  }

  update(){

  }

}
