import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {WorkerModel} from "../model/worker-model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn:"root"
})
export class WorkerService{

  constructor(private httpClient:HttpClient) {
  }

  getWorker():Observable<WorkerModel.WorkerItem[]>{
    return this.httpClient.get<WorkerModel.WorkerItem[]>(environment.api+"/worker/alllist");
  }

  getByWorker(id:number):Observable<WorkerModel.WorkerItem>{
    return this.httpClient.get<WorkerModel.WorkerItem>(environment.api+"/worker/"+id);
  }

  /*updateWorker(body:any):Observable<WorkerModel.WorkerItem>{
    return this.httpClient.post<WorkerModel.WorkerItem>(environment.api+"/worker/createOrUpdate",body);
  }*/

  updateWorker(body:any,):Observable<WorkerModel.WorkerItem>{
    return this.httpClient.post<WorkerModel.WorkerItem>(environment.api+"/worker/createOrUpdate",body);
  }

  deleteWorker(id:number | undefined){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    return this.httpClient.delete(environment.api+"/worker/"+id, { headers, responseType:'text'});
  }

  search(search:string):Observable<WorkerModel.WorkerItem[]>{
    return this.httpClient.get<WorkerModel.WorkerItem[]>(environment.api+"/worker/search/"+search)
  }


}
