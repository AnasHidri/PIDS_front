import { Allocation } from "./allocation";
import { AllocationPreference } from "./allocation-preference";
import { Fees } from "./fees";
import { State } from "./state";

export class PortfolioSettings {
    _id: number;
    name:String;
    start_day:Date;
    start_capital:number;
    volatility_max: number;
    volatility_min: number;
    diversification_min:number;
    diversification_max:number;
    total_return:number;
    fees:number;
    states:State[];
    allocations:number[];
    diversification:number;


    constructor() {
        this._id=0;
        this.name="";
        this.total_return=0;
        this.start_day= new Date();
        this.start_capital=0;
        this.volatility_max=0;
        this.volatility_min=0;
        this.diversification_max=0;
        this.diversification_min=0;
        this.fees=0;
        this.states=[];
        this.allocations=[];
        this.diversification=0;
    }
}
