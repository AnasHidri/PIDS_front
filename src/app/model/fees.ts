export class Fees {
    type:"fixed" | "percent";
    value:Number;

    constructor(){
        this.type="fixed";
        this.value=0;
    }
}
