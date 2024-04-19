import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';

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
  
  ngAfterViewInit(): void {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };
  
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)' // Adjust grid line color
            },
            ticks: {
              color: 'white' // Adjust tick color
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)' // Adjust grid line color
            },
            ticks: {
              color: 'white' // Adjust tick color
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white' // Adjust legend label color
            }
          }
        }
      }
    });



    const labels2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data2 = {
      labels: labels2,
      datasets: [{
        label: 'My Line Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    const ctx2 = document.getElementById('myLineChart') as HTMLCanvasElement;
    const myLineChart = new Chart(ctx2, {
      type: 'line',
      data: data2,
      options: {
        scales: {
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)' // Adjust grid line color
            },
            ticks: {
              color: 'white' // Adjust tick color
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)' // Adjust grid line color
            },
            ticks: {
              color: 'white' // Adjust tick color
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white' // Adjust legend label color
            }
          }
        }
      }
    });

  }
}  