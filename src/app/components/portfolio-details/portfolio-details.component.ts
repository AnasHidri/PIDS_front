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

  

