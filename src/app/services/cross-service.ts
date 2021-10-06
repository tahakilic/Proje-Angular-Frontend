import {EventEmitter, Injectable} from "@angular/core";
import {WorkerModel} from "../model/worker-model";
import WorkerItem = WorkerModel.WorkerItem;

@Injectable({
  providedIn:"root"
})
export class CrossService{
  workerUpload=new EventEmitter<WorkerItem[]>();

  setWorker(workers:WorkerItem[]){
    this.workerUpload.emit(workers);
  }
}
