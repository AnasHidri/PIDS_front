import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  date:Date | undefined

  constructor(private portfolioService:PortfolioServiceService) { }

  ngOnInit(): void {
  }

  test(){
    this.portfolioService.get().subscribe(
      {
        next: res => {
          console.log(res);
                    console.log("works")
        },
        error: err => {
        console.log("not working")
        }
      })
      console.log("works");
    }
  }

  

