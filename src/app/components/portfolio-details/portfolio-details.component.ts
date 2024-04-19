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
  constructor(private portfolioService:PortfolioServiceService, private route:ActivatedRoute, private feesService:FeesServiceService) { }


  transactions: any[] = [
    { stocks: -533.00, price: 0.63, time: '19:04:53' },
    { stocks: 532.50, price: 0.47, time: '19:04:52' },
    { stocks: -532.00, price: 0.52, time: '19:04:42' },
    { stocks: -532.00, price: 30.21, time: '19:03:35' },
    { stocks: 530.00, price: 131.35, time: '19:03:09' },
    { stocks: -530.00, price: 79.96, time: '19:02:38' },
    { stocks: -530.50, price: 71.80, time: '19:02:04' },
    { stocks: -529.00, price: 0.63, time: '19:02:02' },
    { stocks: 529.00, price: 0.63, time: '19:02:00' },
    { stocks: -529.00, price: 0.06, time: '19:01:59' },
    { stocks: 529.50, price: 0.57, time: '19:01:59' },
    { stocks: 530.50, price: 85.13, time: '19:01:35' },
  ]


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.portfolioService.getById(id+"").subscribe(
      {
        next: res => {
          console.log(res);
          this.portfolio=res;
                    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa",this.portfolio)
        },
        error: err => {
        console.log("not working")
        }
      })

      this.feesService.getFeesById(id+"").subscribe(
        {
          next: res => {
            console.log("fees",res);
            this.fee=res;
          }
        }
      )
  }

  test(){

      console.log("works");
    }

    filterStates() {
      if (!this.date) return;
      this.filteredStates = this.portfolio.states.filter(state => {
        return state.date === this.date;
      });

      console.log("new one", this.filteredStates);
    }

  }

  

