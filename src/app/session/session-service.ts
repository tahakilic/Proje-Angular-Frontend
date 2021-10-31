import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WorkerModel} from "../model/worker-model";
import {environment} from "../../environments/environment";
import {User} from "../model/user";

@Injectable({
  providedIn:"root"
})
export class SessionService {

  workerSet:WorkerModel.WorkerItem |undefined;


  constructor(private httpClient:HttpClient) {
  }
  createOrUpdate(body:any):Observable<WorkerModel.WorkerItem>{
    return this.httpClient.post<WorkerModel.WorkerItem>(environment.api+"/worker/createOrUpdate",body);
  }


  worker(workerGet:WorkerModel.WorkerItem){
    this.workerSet=workerGet;
  }

  loginUser(user:any):Observable<WorkerModel.WorkerItem>{
    return this.httpClient.post<WorkerModel.WorkerItem>(environment.api+"/worker/login",user);

  }




}
