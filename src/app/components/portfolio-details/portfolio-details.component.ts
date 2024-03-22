import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Portfolio } from 'src/app/model/portfolio';
import { PortfolioSettings } from 'src/app/model/portfolio-settings';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  date:Date | undefined;
  portfolio= new PortfolioSettings;
  constructor(private portfolioService:PortfolioServiceService, private route:ActivatedRoute) { }

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
  }

  test(){

      console.log("works");
    }
  }

  

