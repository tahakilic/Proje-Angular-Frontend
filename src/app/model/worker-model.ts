
export namespace WorkerModel{

  export interface WorkerItem{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    telNumber:string;
    password:string;
    age:number;
    address:string;
    areaOfInterest:string;
    description:string;
    price:number;
    workInLocations:string;

  }

  export interface UserLoginId{
    userId:number;
  }

}
