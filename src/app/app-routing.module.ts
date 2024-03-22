import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverallStocksComponent } from './components/shared/overall-stocks/overall-stocks.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ViewPortfolioComponent } from './components/view-portfolio/view-portfolio.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/overallstocks', component: OverallStocksComponent },
  { path: 'portfolio', component: ViewPortfolioComponent },
  { path: 'stocks', component:StocksComponent},
  { path: 'portfoliodetails/:id', component:PortfolioDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
