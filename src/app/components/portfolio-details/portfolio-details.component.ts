import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Fees } from 'src/app/model/fees';
import { Portfolio } from 'src/app/model/portfolio';
import { PortfolioSettings } from 'src/app/model/portfolio-settings';
import { State } from 'src/app/model/state';
import { FeesServiceService } from 'src/app/services/fees-service.service';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  date:Date | undefined;
  portfolio= new PortfolioSettings;
  filteredStates: State[] = [];
  fee = new Fees;

  data: any[] = [];
  selectedBank: string = '';
  banks: string[] = [];

  constructor(private portfolioService:PortfolioServiceService, private route:ActivatedRoute, private feesService:FeesServiceService) { }


  transactions: any[] = [
  ]


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.portfolioService.getById(id+"").subscribe(
      {
        next: res => {
          console.log(res);
          this.portfolio=res;
        },
        error: err => {
        console.log("not working")
        }
      })

      this.feesService.getFeesById(id+"").subscribe(
        {
          next: res => {
            this.fee=res;
          }
        }
      )

      this.getDataAndCalculatePercentageChange("STB");
      this.portfolioService.getNames().subscribe({
        next: res => {
          console.log(res);
          this.banks = res.csv_filenames;
        }
      });
  }

  test(){

      this.portfolioService.getData("BNA").subscribe({
        next: res => {
          console.log(res);
        }
      })
    }

    filterStates() {
      if (!this.date) return;
      this.filteredStates = this.portfolio.states.filter(state => {
        return state.date === this.date;
      });

      console.log("new one", this.filteredStates);
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

  

