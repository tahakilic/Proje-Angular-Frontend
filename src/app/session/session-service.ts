import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WorkerModel} from "../model/worker-model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn:"root"
})
export class SessionService {

  workerSet:WorkerModel.WorkerItem |undefined;
 workerDetailSet:WorkerModel.WorkerDetail|undefined;


  constructor(private httpClient:HttpClient) {
  }
  createOrUpdate(body:any):Observable<WorkerModel.WorkerItem>{
    return this.httpClient.post<WorkerModel.WorkerItem>(environment.api+"/worker/createOrUpdate",body);
  }

  createOrUpdateDetail(body:any):Observable<WorkerModel.WorkerDetail>{
    return this.httpClient.post<WorkerModel.WorkerDetail>(environment.api+"/worker/detail/createOrUpdate",body);
  }


  worker(workerGet:WorkerModel.WorkerItem){
    this.workerSet=workerGet;
  }

  workerDetail(workerDetailGet:WorkerModel.WorkerDetail){
    this.workerDetailSet=workerDetailGet;
  }





}
