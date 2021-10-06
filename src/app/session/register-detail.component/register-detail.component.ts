import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {SessionService} from "../session-service";
import {catchError} from "rxjs/operators";
import {RegisterComponent} from "../register/register.component";
import {WorkerModel} from "../../model/worker-model";
import WorkerDetail = WorkerModel.WorkerDetail;

@Component({
  selector:"app-register-detail",
  templateUrl:"register-detail.component.html",
  styleUrls:["register-detail.component.scss"]

})
export class RegisterDetailComponent {

  operationStatus=false;


  form = new FormGroup({
    id:new FormControl(),
    address:new FormControl(),
    areaOfInterest:new FormControl(),
    description:new FormControl(),
    price:new FormControl(),
    workInLocations:new FormControl(),
  }) ;
  constructor(private router:Router,private fb:FormBuilder,private sessionService:SessionService) {
  }




  create(){
    if(this.form?.valid) {
      let payload = {
        id: this.form?.controls['id'].value, //bu formun içideki id değerinin değerini al demek
        address: this.form?.controls['address'].value,
        areaOfInterest: this.form?.controls['areaOfInterest'].value,
        description: this.form?.controls['description'].value,
        price: this.form?.controls['price'].value,
        workInLocations: this.form?.controls['workInLocations'].value
      }
      this.operationStatus=true;

      setTimeout(() => { //butona tıklandığında lütfen bekleyiniz yazdırmak için
        this.sessionService.createOrUpdateDetail(payload).pipe(catchError(err => { //pipe backende hata olursa hataya düşer
          this.operationStatus = false;
          throw err;
        })).subscribe(worker => {
          this.operationStatus = false

        });

        if (payload.id == null) {
          this.form?.reset();
        }

      }, 1000)


    }



  }


  registerClick(){
    this.create()
    //this.router.navigate(["workers"])
  }



}
