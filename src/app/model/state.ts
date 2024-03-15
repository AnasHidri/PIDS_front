import { Allocation } from "./allocation";
import { Signal } from "./signal";

export class State {
    date:Date;
    current_capital:number;
    reserve:number;
    daily_return:number;
    total_return:number;
    volatility:number;
    allocation: Allocation[];
    signals: Signal[];

    constructor(){
        this.date= new Date();
        this.current_capital=0;
        this.reserve=0;
        this.daily_return=0;
        this.total_return=0;
        this.volatility=0;
        this.allocation=[];
        this.signals=[];
    }
}
