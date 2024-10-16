import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverallStocksComponent } from './components/shared/overall-stocks/overall-stocks.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ViewPortfolioComponent } from './components/view-portfolio/view-portfolio.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { DesignTradeComponent } from './components/shared/design-trade/design-trade.component';
import { CandlestickChartComponent } from './components/candlestick-chart/candlestick-chart.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/overallstocks', component: OverallStocksComponent },
  { path: 'dashboard/design', component: DesignTradeComponent },
  { path: 'portfolio', component: ViewPortfolioComponent },
  { path: 'stocks', component:StocksComponent},
  { path: 'candlestick', component:CandlestickChartComponent},
  { path: 'portfoliodetails/:id', component:PortfolioDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
