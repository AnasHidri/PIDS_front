import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreatePortfolioComponent } from '../modal-create-portfolio/modal-create-portfolio.component';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';
import { PortfolioSettings } from 'src/app/model/portfolio-settings';

@Component({
  selector: 'app-portfolio-cards',
  templateUrl: './portfolio-cards.component.html',
  styleUrls: ['./portfolio-cards.component.css']
})
export class PortfolioCardsComponent implements OnInit {

  portfolio: PortfolioSettings[]=[];
  constructor(public dialog: MatDialog, public portfolioService: PortfolioServiceService) { }

  ngOnInit(): void {
    this.portfolioService.get().subscribe(
      {
        next: res => {
          console.log(res);
          this.portfolio=res;
                    console.log("works")
        },
        error: err => {
        console.log("not working")
        }
      })
      console.log("works");

  }
  openDialog() {
    console.log("test")
    this.dialog.open(ModalCreatePortfolioComponent, {
      data:{
       
      },
      panelClass: 'custom-dialog-container',
  
  });
  
  
  }

}
