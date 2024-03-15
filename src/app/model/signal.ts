export class Signal {
    ticker:String;
    type: "buy" | "sell";
    shares:number;
    capital_percent:number;

    constructor(){
        this.ticker="";
        this.type="buy";
        this.shares=0;
        this.capital_percent=0;
    }
}
