import { AllocationPreference } from "./allocation-preference";
import { Fees } from "./fees";

export class PortfolioSettings {
    _id: String;
    name:String;
    start_date:Date;
    start_capital:number;
    volatility_min: number;
    volatility_max:number;
    diversification_min:number;
    diversification_max:number;
    fees:Fees;


    constructor() {
        this._id="";
        this.name="";
        this.start_date= new Date();
        this.start_capital=0;
        this.volatility_min=0;
        this.volatility_max=0;
        this.diversification_max=0;
        this.diversification_min=0;
        this.fees= new Fees();
    }
}
