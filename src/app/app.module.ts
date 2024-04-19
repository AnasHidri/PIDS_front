import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StockscardsComponent } from './components/shared/stockscards/stockscards.component';
import { RiskStatsPortfolioComponent } from './components/shared/risk-stats-portfolio/risk-stats-portfolio.component';

import { NgChartsModule } from 'ng2-charts';
import { OverallStocksComponent } from './components/shared/overall-stocks/overall-stocks.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ViewPortfolioComponent } from './components/view-portfolio/view-portfolio.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { PortfolioCardsComponent } from './components/shared/portfolio-cards/portfolio-cards.component';
import { ModalCreatePortfolioComponent } from './components/shared/modal-create-portfolio/modal-create-portfolio.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from  '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { HttpClientModule } from '@angular/common/http';
import { DesignTradeComponent } from './components/shared/design-trade/design-trade.component';
import { TopbarComponent } from './components/shared/topbar/topbar.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    
    DashboardComponent,
    StockscardsComponent,
    RiskStatsPortfolioComponent,
    OverallStocksComponent,
    HomepageComponent,
    ViewPortfolioComponent,
    StocksComponent,
    PortfolioCardsComponent,
    ModalCreatePortfolioComponent,
    PortfolioDetailsComponent,
    DesignTradeComponent,
    TopbarComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    NgChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDividerModule,
    MatToolbarModule,
   MatIconModule,
   MatSnackBarModule,
   MatSlideToggleModule,
   MatTabsModule,
   MatButtonModule,
   MatRippleModule,
   MatInputModule,
   MatBadgeModule,
   MatSelectModule,
   MatChipsModule,
   MatDialogModule,
   MatSliderModule

  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
