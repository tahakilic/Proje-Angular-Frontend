import {WorkerModel} from "./worker-model";

export namespace CommentModel{

  export interface Comment {
   firstName:string;
   lastName:string;
   workName:string;
   comment:string;
   date:Date;
   worker?:WorkerModel.WorkerItem;
  }

}
