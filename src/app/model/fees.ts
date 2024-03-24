export class Fees {
    id:number;
    type:"fixed" | "percent";
    value:Number;

    constructor(){
        this.id=0;
        this.type="fixed";
        this.value=0;
    }
}
