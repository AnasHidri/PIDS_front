import { Component, OnInit } from '@angular/core';
import { Chart, ChartTypeRegistry } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  data: any[] = [];
  selectedBank: string = '';
  banks: string[] = [];
  constructor(private portfolioService:PortfolioServiceService) { }

  ngOnInit(): void  {

    this.getDataAndCalculatePercentageChange("STB",this.data);
    this.portfolioService.getNames().subscribe({
      next: res => {
        console.log(res);
        this.banks = res.csv_filenames;
      }
    });

  }

  

  getDataAndCalculatePercentageChange(bank: string, data: any[]) {
    this.portfolioService.getLastData(bank).subscribe({
      next: res => {
        data = res.slice(-10);
        console.log(data);
        this.generateChart(data);
        this.generateLineChart(data);
      }
    });
  }

    generateChart(data: any[]) {
      const labels: string[] = [];
      const chartData: number[] = [];
  
      data.forEach(item => {
        labels.push(item.date);
        chartData.push(item.close);
      });
  
      console.log("labels", labels);
      console.log("chart data", chartData);
  
      const chartOptions = {
        scales: {
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'white'
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'white'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white'
            }
          }
        }
      };

      this.createChart('myChart', 'bar', labels, chartData, chartOptions);

    }

    createChart(canvasId: string, chartType: keyof ChartTypeRegistry, labels: string[], chartData: number[], options: any) {
      const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
      Chart.getChart(ctx)?.destroy();
      const myChart = new Chart(ctx, {
        type: chartType,
        data: {
          labels: labels,
          datasets: [{
            label: "Close price",
            data: chartData,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1
          }]
        },
        options: options
      });
    }


    generateLineChart(data: any[]) {
      const labels: string[] = [];
      const chartData: number[] = [];
  
      data.forEach(item => {
        labels.push(item.date);
        chartData.push(item.close);
      });
  
      console.log("labels", labels);
      console.log("chart data", chartData);
  
      const chartOptions = {
        scales: {
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'white'
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'white'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white'
            }
          }
        }
      };
  
      this.createChart('myLineChart', 'line', labels, chartData, chartOptions);
    }
}  