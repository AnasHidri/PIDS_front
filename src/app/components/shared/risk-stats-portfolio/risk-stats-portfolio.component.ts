import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';

@Component({
  selector: 'app-risk-stats-portfolio',
  templateUrl: './risk-stats-portfolio.component.html',
  styleUrls: ['./risk-stats-portfolio.component.css']
})
export class RiskStatsPortfolioComponent implements AfterViewInit, OnDestroy {
  private chart: Chart | undefined;
  startDate: Date | undefined;
  endDate: Date | undefined;

  ngAfterViewInit() {
    this.updateChart();
  }

  updateChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    const ctx = document.getElementById('yourChartId') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05', '2024-01-06', '2024-01-07', '2024-01-08', '2024-01-09', '2024-01-10', '2024-01-11', '2024-01-12', '2024-01-13', '2024-01-14'], // Example date labels
        datasets: [
          {
            label: 'Risk',
            data: [10, 20, 15, 25, 10, 30, 29, 25, 35, 30, 40, 35, 45, 40], // Example risk data
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: 'Stocks',
            data: [15, 25, 20, 30, 5, 4, 7, 8, 10, 15, 12, 18, 20, 22], // Example stocks data
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          },
          // Add more datasets as needed
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Risk and Stocks Line Chart',
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
          },
        },
      },
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
