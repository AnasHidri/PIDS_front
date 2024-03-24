export class AllocationPreference {
    id:number;
    ticker:String;
    capital_percent_min:number;
    capital_percent_max:number;

    constructor(){
        this.id=0;
        this.ticker="";
        this.capital_percent_min=0;
        this.capital_percent_max=0;
    }
}
