export class Fees {
    _id:number;
    type:"fixed" | "percent";
    value:Number;

    constructor(){
        this._id=0;
        this.type="fixed";
        this.value=0;
    }
}
