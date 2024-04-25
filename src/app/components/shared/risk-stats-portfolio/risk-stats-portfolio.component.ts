import { Component, AfterViewInit, OnDestroy, Input, SimpleChanges, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-risk-stats-portfolio',
  templateUrl: './risk-stats-portfolio.component.html',
  styleUrls: ['./risk-stats-portfolio.component.css']
})
export class RiskStatsPortfolioComponent implements OnInit, OnDestroy {
  private chart: Chart | undefined;
  startDate: Date | undefined;
  endDate: Date | undefined;
  @Input() selectedBank: string = '';
  data: any[] = [];

  constructor(private portfolioService:PortfolioServiceService){}

  ngOnInit():void {
    this.getDataAndCalculatePercentageChange("BT"); // Fetch initial data
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDataAndCalculatePercentageChange(this.selectedBank); // Fetch data when selectedBank changes
  }
  
  updateChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    const ctx = document.getElementById('yourChartId') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.data.map(item => item.date), // Use dates from data
        datasets: [
          {
            label: 'Close',
            data: this.data.map(item => item.close), // Use close prices from data
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: 'Open',
            data: this.data.map(item => item.open), // Use open prices from data
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          }
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: 'white' // Set legend labels color to white
            }
          },
          title: {
            display: true,
            text: 'Close and Open Prices Line Chart', // Change chart title
            color: 'white' // Set title color to white
          },
        },
        scales: {
          x: {
            type: 'time', // Use time scale for x-axis
            time: {
              unit: 'day', // Adjust the time unit as needed (e.g., 'month', 'year')
              displayFormats: {
                day: 'MMM dd', // Format for day labels
              },
            },
            ticks: {
              color: 'white' // Set x-axis ticks color to white
            },
            grid: {
              color: 'grey' // Set y-axis grid lines color to white
            }
      
          },
          y: {
            ticks: {
              color: 'white' // Set y-axis ticks color to white
            },
            grid: {
              color: 'grey' // Set y-axis grid lines color to white
            }
          }
        
        },
      },
    });
  }
  

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  getDataAndCalculatePercentageChange(bank: string) {
    this.portfolioService.getLastData(bank).subscribe({
      next: res => {
        this.data = res.slice(-10);
        console.log(this.data);
        this.updateChart(); // Update chart after data is fetched
      }
    });
  }
}