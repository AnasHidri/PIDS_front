import { Fees } from "./fees";
import { State } from "./state";

export class Portfolio {
    _id: String;
    name:String;
    start_date:Date;
    start_capital:number;
    volatility: [number,number];
    fees:Fees;
    state:State[];
    isActive:boolean;


    constructor() {
        this._id="";
        this.name="";
        this.start_date= new Date();
        this.start_capital=0;
        this.volatility=[0,0];
        this.fees= new Fees();
        this.state=[];
        this.isActive=true;
    }

    
}

