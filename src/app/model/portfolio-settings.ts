import { Allocation } from "./allocation";
import { AllocationPreference } from "./allocation-preference";
import { Fees } from "./fees";
import { State } from "./state";

export class PortfolioSettings {
    _id: String;
    name:String;
    start_day:Date;
    start_capital:number;
    volatility: number;
    diversification_min:number;
    diversification_max:number;
    total_return:number;
    fees:Fees;
    states:State[];
    allocations:Allocation[];


    constructor() {
        this._id="";
        this.name="";
        this.total_return=0;
        this.start_day= new Date();
        this.start_capital=0;
        this.volatility=0;
        this.diversification_max=0;
        this.diversification_min=0;
        this.fees= new Fees();
        this.states=[];
        this.allocations=[];
    }
}
