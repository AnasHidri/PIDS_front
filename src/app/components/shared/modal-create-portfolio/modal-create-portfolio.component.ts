import { Component } from '@angular/core';
import { Allocation } from 'src/app/model/allocation';
import { AllocationPreference } from 'src/app/model/allocation-preference';
import { Fees } from 'src/app/model/fees';
import { Portfolio } from 'src/app/model/portfolio';
import { PortfolioSettings } from 'src/app/model/portfolio-settings';
import { AllocationPreferencesServiceService } from 'src/app/services/allocation-preferences-service.service';
import { AllocationServiceService } from 'src/app/services/allocation-service.service';
import { FeesServiceService } from 'src/app/services/fees-service.service';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-modal-create-portfolio',
  templateUrl: './modal-create-portfolio.component.html',
  styleUrls: ['./modal-create-portfolio.component.css']
})
export class ModalCreatePortfolioComponent {

  allocationOptions: string[] = [];
  feeOptions: string[] = [];
  NewPortfolio = new PortfolioSettings;
  fees: Fees[] = [];
  allocations: AllocationPreference[] = [];
  selectedAllocation = new AllocationPreference;
  selectedAllocations: AllocationPreference[] = [];
  selectedfees: Fees[]=[];
  selectedfee = new Fees;
  banks: string[] = [];

  constructor(private feesService: FeesServiceService, private portfolioService: PortfolioServiceService,
    private allocationpreferenceService:AllocationPreferencesServiceService) { }

  ngOnInit(): void {

    this.feesService.getFees().subscribe({
      next: res => {
        console.log(res);
        this.fees = res;
        this.feeOptions = this.fees.map(fee => fee.type.toString()); 

      },
    });

    this.portfolioService.getNames().subscribe({
      next: res => {
        console.log(res);
        this.banks = res.csv_filenames;
        
      }
    });

    this.allocationpreferenceService.getAllocationPreferences().subscribe({
      next: res => {
        console.log(res);
        this.allocations = res;
        this.allocationOptions = this.allocations.map(allocation => allocation.ticker.toString()); 
  
      },
    });
    
  }

  formatSliderValue(value: number) {
    return `${value}%`;
  }

  addNewAllocation() {
    const newAllocation = new AllocationPreference(); 
    this.selectedAllocations.push(newAllocation);
  }
  onSelectAllocation(allocation: AllocationPreference) {
    this.selectedAllocation = allocation;
  }

  onCreatePortfolio() {


    if (
      this.NewPortfolio.volatility_min <= 0 ||
      this.NewPortfolio.volatility_max <= 0 ||
      this.NewPortfolio.diversification_min <= 0 ||
      this.NewPortfolio.diversification_max <= 0 ||
      this.NewPortfolio.volatility_min >= this.NewPortfolio.volatility_max ||
      this.NewPortfolio.diversification_min >= this.NewPortfolio.diversification_max
    ) {
      
      console.log('Invalid input: constraints not met');
      return;
    }

    console.log("this is the allocations", this.selectedAllocations);
    console.log("this is the fees",  this.selectedfees);

    this.NewPortfolio.allocations = this.selectedAllocations.map(allocation => allocation._id);
    this.NewPortfolio.fees=this.selectedfee._id;
    console.log("new portfolio", this.NewPortfolio);
    this.portfolioService.CreatePortfolio(this.NewPortfolio).subscribe();

  
  }

  getUniqueName(i: number): string {
    return `allocation-${i}`;
  }

  onSelectFee(event: any) {
    this.selectedfee = event.value;
    console.log(this.selectedfee);
  }




}
