import {Component, OnDestroy} from '@angular/core';
import {WorkerService} from '../worker-service';
import {WorkerModel} from '../../model/worker-model';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError} from "rxjs/operators";
import {CrossService} from "../../services/cross-service";

@Component({
  selector:'app-worker',
  templateUrl:'./workers.component.html',
  styleUrls:['./workers.component.scss']
})

export class WorkersComponent implements OnDestroy{

  title='merhaba'

  workers:WorkerModel.WorkerItem[]=[];

  selectedWorker:WorkerModel.WorkerItem | undefined;

  private sub:any;

  private subCross:any;

  form:FormGroup | undefined;

  operationStatus = false;

  deleteOperationMessage:any;



  constructor(private workerService:WorkerService,private router:Router, private fb:FormBuilder,private crossService:CrossService) {
  }

  ngOnInit(){
   this.sub = this.workerService.getWorker().subscribe(worker=>{
     this.workers=worker;
   })

    this.subCross=this.crossService.workerUpload.subscribe(workers=>{
      this.workers=workers;
    })

  }





  openDetail(id:number){
    this.router.navigate(["workers/"+id]);
  }




  ngOnDestroy(): void { //sitede en son çalışır
    this.sub.unsubscribe(); //bunun nedeni subscribe çalışmayı bıraksın diye yoksa ilerleyen zamanlarda site yavaşlar
     this.subCross.unsubscribe();
  }


}
