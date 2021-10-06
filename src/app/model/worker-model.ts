
export namespace WorkerModel{

  export interface WorkerItem{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    telNumber:string;
    password:string;
    age:number;
    detailId:number;
  }

  export interface WorkerDetail{
    id:number;
    address:string;
    areaOfInterest:string;
    description:string;
    price:number;
    workInLocations:string;
  }



}
