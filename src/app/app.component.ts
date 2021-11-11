import { Component } from '@angular/core';
import {CrossService} from "./services/cross-service";
import {WorkerService} from "./work/worker-service";
import {Router} from "@angular/router";
import {AccountService} from "./services/account.service";
import {AlertifyService} from "./services/alertify.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search="";
  id!:number;

  constructor(private crossService:CrossService,
              private workerService:WorkerService,
              private router:Router,
              private accountService:AccountService,
              private alert:AlertifyService
  ){}

  ngOnInit(){
    setTimeout(()=>{
      this.searchWorkers();
    },1)

  }

  searchWorkers(){
    if(this.search.length > 0){
      this.workerService.search(this.search).subscribe((res)=>{
        this.crossService.setWorker(res);
      });
    }else {
      this.workerService.getWorker().subscribe(res=>{
        this.crossService.setWorker(res)
      })
    }
  }

  openLogin(){
    if(this.accountService.isLoggedIn()==false){
      this.router.navigate(["session/login"]);
    }
  }

  openRegister(){
    if(this.accountService.isLoggedIn()==false){
      this.router.navigate(["session/register"]);
    }
  }

  openWorker(){
    this.router.navigate(["workers"]);

  }

  logOut(){
    this.accountService.logOut();
    this.router.navigate(["workers"])
  }
  isLoggedIn(){
    return this.accountService.isLoggedIn();
  }

  profileId(id:number){
   this.id=id;
  }

  profile(){
    this.router.navigate(["workers/profile/"+this.id])
  }


}
