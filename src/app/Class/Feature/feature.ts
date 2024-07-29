import { Epic } from "../Epic/epic";
import { Sprint } from "../sprint/sprint";

export class Feature {
    featureId!:number;
    type!:string;
    filedAgainst!:string;
    createdBy!:string;
    description!:string;
    createdDate!:Date;
    plannedFor!:string;
    sprintId:number|null;
    epics!:Epic[];
    sprint!:Sprint;

    constructor(sprintId:number|null){
        this.sprintId=sprintId;
    }
  
}
