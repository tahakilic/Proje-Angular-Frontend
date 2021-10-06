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


  edit(worker:WorkerModel.WorkerItem){
    this.selectedWorker=worker;

    this.form=this.fb.group({
      id:[worker.id],
      firstName:[worker.firstName,[Validators.required]], //"required" zorunlu alan anlamına gelir
      lastName:[worker.lastName,[Validators.required]],
      email:[worker.email,[Validators.required]],
      telNumber:[worker.telNumber,[Validators.required]]
    })

  }

  create(){
    this.form=this.fb.group({
      id:[null],
      firstName:["",[Validators.required]], //"required" zorunlu alan anlamına gelir
      lastName:["",[Validators.required]],
      email:["",[Validators.required]],
      telNumber:["",[Validators.required]]
    })
  }


  createOrUpdate(){
    if(this.form?.valid){
      let payload = {
        id:this.form?.controls['id'].value, //bu formun içideki id değerinin değerini al demek
        firstName:this.form?.controls['firstName'].value,
        lastName:this.form?.controls['lastName'].value,
        email:this.form?.controls['email'].value,
        telNumber:this.form?.controls['telNumber'].value
      }

      this.operationStatus=true;

      setTimeout(()=>{ //butona tıklandığında lütfen bekleyiniz yazdırmak için
        this.workerService.updateWorker(payload).pipe(catchError(err => { //pipe backende hata olursa hataya düşer
          this.operationStatus=false;
          throw err;
        })).subscribe(worker=>{
          this.operationStatus=false});

        if(payload.id==null){
          this.form?.reset();
        }

      },1000)
    }
  }

deleteModal(worker:WorkerModel.WorkerItem){
  this.selectedWorker=worker;
}

delete(){
    const id=this.selectedWorker?.id || -1;
    this.operationStatus=true;

    setTimeout(()=>{
      this.workerService.deleteWorker(id).pipe(catchError(err => {
        this.operationStatus=false;
        throw err;
      })).subscribe((res)=>{
        this.operationStatus=false;
        this.deleteOperationMessage=res;
    })


    },1000);
  this.operationStatus=true;
}

  ngOnDestroy(): void { //sitede en son çalışır
    this.sub.unsubscribe(); //bunun nedeni subscribe çalışmayı bıraksın diye yoksa ilerleyen zamanlarda site yavaşlar
     this.subCross.unsubscribe();
  }


}
