import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreatePortfolioComponent } from '../shared/modal-create-portfolio/modal-create-portfolio.component';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-view-portfolio',
  templateUrl: './view-portfolio.component.html',
  styleUrls: ['./view-portfolio.component.css']
})
export class ViewPortfolioComponent implements OnInit {

  data: any[] = [];
  selectedBank: string = '';
  banks: string[] = [];

  constructor(private portfolioService:PortfolioServiceService,public dialog: MatDialog) { }

  transactions: any[] = [];

  ngOnInit(): void {
    this.getDataAndCalculatePercentageChange("STB");
    this.portfolioService.getNames().subscribe({
      next: res => {
        console.log(res);
        this.banks = res.csv_filenames;
      }
    });
  }
  openDialog() {
    console.log("test")
    this.dialog.open(ModalCreatePortfolioComponent);
  }

  getDataAndCalculatePercentageChange(bank: string) {
    this.portfolioService.getLastData(bank).subscribe({
      next: res => {
        this.data = res.slice(-10);
        console.log(this.data);
        // Update transactions with received data
        this.transactions = this.data.map(item => ({
          stocks: item.open,
          price: item.close,
          time: item.date
        }));
      }
    });
  }

}
