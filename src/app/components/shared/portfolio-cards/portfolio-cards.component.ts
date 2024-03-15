import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreatePortfolioComponent } from '../modal-create-portfolio/modal-create-portfolio.component';

@Component({
  selector: 'app-portfolio-cards',
  templateUrl: './portfolio-cards.component.html',
  styleUrls: ['./portfolio-cards.component.css']
})
export class PortfolioCardsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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
