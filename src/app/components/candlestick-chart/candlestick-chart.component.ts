import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.css']
})
export class CandlestickChartComponent implements OnInit {
  data: any[] = [];
  chartOptions: any; // Change the type as needed
  selectedBank: string = 'STB';
  banks: string[] = [];
  constructor(private portfolioService: PortfolioServiceService) { }

  ngOnInit(): void {

    this.getDataAndCalculatePercentageChange("STB");
    this.portfolioService.getNames().subscribe({
      next: res => {
        console.log(res);
        this.banks = res.csv_filenames;
      }
    });
  }

  getDataAndCalculatePercentageChange(bank: string) {
    this.portfolioService.getLastData30(bank).subscribe({
      next: res => {
        this.data = res;
        console.log(this.data);
        this.prepareChartData();
      }
    });
  }

  prepareChartData() {
    this.chartOptions = {
      series: [{
        data: this.data.map(item => ({
          x: new Date(item.date).getTime(),
          y: [item.open, item.high, item.low, item.close]
        }))
      }],
      chart: {
        type: 'candlestick',
        height: 600,
        // Add plotOptions to customize series colors
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#00B746', // green candles
              downward: '#EF403C' // red candles
            }
          }
        }
      },
      xaxis: {
        type: 'datetime'
      },
  
      // Add more options as needed
    };
  }
  
  
}
