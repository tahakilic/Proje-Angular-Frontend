import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {SessionService} from "../session-service";

import {catchError} from "rxjs/operators";
import {AppComponent} from "../../app.component";
import {AlertifyService} from "../../services/alertify.service";

@Component({
  selector:"app-login",
  templateUrl:"login.component.html",
  styleUrls:["login.component.scss"]

})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  profileId:number | undefined;


  constructor(private router:Router,
              private fb:FormBuilder,
              private accountService:AccountService,
              private sessionService:SessionService,
              private appComponent:AppComponent,
              private alertifyService:AlertifyService) {
  }

  ngOnInit(){

    this.loginForm=this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]]
      })


  }

  registerClick(){
  this.router.navigate(["session/register"]);
  }

  userLogin(){
   let payload={
      email:this.loginForm.controls["email"].value,
      password:this.loginForm.controls["password"].value
    }
   this.sessionService.loginUser(payload).pipe(catchError(err => {
     throw err;
     this.alertifyService.error("Hata");
    })).subscribe(user=>{
    if(user.id!==null){
      this.profileId=user.id
      this.accountService.login(user)
      this.appComponent.profileId(user.id)
      this.alertifyService.success(user.firstName+" "+user.lastName+" Oturum Açıldı");
      this.router.navigate(["workers/profile/"+this.profileId])
    }
    });

  }
}


