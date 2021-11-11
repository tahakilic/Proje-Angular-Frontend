import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError} from "rxjs/operators";
import {SessionService} from "../session-service";
import {AlertifyService} from "../../services/alertify.service";


@Component({
  selector:"app-register",
  templateUrl:"register.component.html",
  styleUrls:["register.component.scss"]

})
export class RegisterComponent {


  operationStatus=false;
  form!:FormGroup;

  /*form = new FormGroup({
    id:new FormControl(null),
    firstName:new FormControl(),
    lastName:new FormControl(),
    age:new FormControl(),
    email:new FormControl(),
    telNumber:new FormControl(),
    password:new FormControl(),
    address:new FormControl(),
    areaOfInterest:new FormControl(),
    description:new FormControl(),
    price:new FormControl(),
    workInLocations:new FormControl(),
  }) ;*/


  constructor(private router:Router,
              private fb:FormBuilder,
              private sessionService:SessionService,
              private alertify:AlertifyService) {
  }
  ngOnInit(){
    this.form = this.fb.group({
      id:[],
      firstName:["",[Validators.required]],
      lastName:["",[Validators.required]],
      email:["",[Validators.required]],
      telNumber:["",[Validators.required]],
      password:["",[Validators.required]],
      age:["",[Validators.required]],
      address:["",[Validators.required]],
      areaOfInterest:["",[Validators.required]],
      description:["",[Validators.required]],
      price:["",[Validators.required]],
      workInLocations:["",[Validators.required]]
    })

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
        password: this.form?.controls['password'].value,
        address: this.form?.controls['address'].value,
        areaOfInterest: this.form?.controls['areaOfInterest'].value,
        description: this.form?.controls['description'].value,
        price: this.form?.controls['price'].value,
        workInLocations: this.form?.controls['workInLocations'].value
      }
     this.operationStatus=true;

      setTimeout(() => { //butona tıklandığında lütfen bekleyiniz yazdırmak için
        this.sessionService.createOrUpdate(payload).pipe(catchError(err => { //pipe backende hata olursa hataya düşer
          this.operationStatus = false;
            this.alertify.error("Kayıt Sırasında Hata Oluştu!!!");
          throw err;
        })).subscribe(worker => {
          this.alertify.success("Kayıt başarılı bir şekilde oluşturuldu.")
          this.operationStatus = false

        });

        if (payload.id == null) {
          this.form?.reset();
        }

      }, 100)

    }
  }

  openLogin(){
    this.router.navigate(["session/login"]);
  }




}



