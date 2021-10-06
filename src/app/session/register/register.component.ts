import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError} from "rxjs/operators";
import {SessionService} from "../session-service";


@Component({
  selector:"app-register",
  templateUrl:"register.component.html",
  styleUrls:["register.component.scss"]

})
export class RegisterComponent {

  operationStatus=false;

  form = new FormGroup({
    id:new FormControl(null),
    detailId:new FormControl(this.sessionService.workerDetailSet?.id),
    firstName:new FormControl(),
    lastName:new FormControl(),
    age:new FormControl(),
    email:new FormControl(),
    telNumber:new FormControl(),
    password:new FormControl()
  }) ;


  constructor(private router:Router,private fb:FormBuilder,private sessionService:SessionService) {
  }
  ngOnInit(){

  }
  openRegisterDetail(){
    this.router.navigate(["session/register/detail"]);
   this.create();


  }



  create(){
    if(this.form?.valid) {
      let payload = {
        id: this.form?.controls['id'].value, //bu formun içideki id değerinin değerini al demek
        firstName: this.form?.controls['firstName'].value,
        lastName: this.form?.controls['lastName'].value,
        age: this.form?.controls['age'].value,
        email: this.form?.controls['email'].value,
        telNumber: this.form?.controls['telNumber'].value,
        password: this.form?.controls['password'].value
      }
     this.operationStatus=true;

      setTimeout(() => { //butona tıklandığında lütfen bekleyiniz yazdırmak için
        this.sessionService.createOrUpdate(payload).pipe(catchError(err => { //pipe backende hata olursa hataya düşer
          this.operationStatus = false;
          throw err;
        })).subscribe(worker => {
          this.operationStatus = false
          console.warn(worker)

        });

        if (payload.id == null) {
          this.form?.reset();
        }

      }, 0)

      console.warn(payload.id)
    }
  }

  openLogin(){
    this.router.navigate(["session/login"]);
  }




}



