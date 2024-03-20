import { Fees } from "./fees";
import { State } from "./state";

export class Portfolio {
    _id: String;
    state:State[];
    isActive:boolean;


    constructor() {
        this._id="";
        this.state=[];
        this.isActive=true;
    }

    
}

