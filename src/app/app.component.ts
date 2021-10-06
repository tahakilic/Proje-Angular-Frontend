import { Component } from '@angular/core';
import {CrossService} from "./services/cross-service";
import {WorkerService} from "./work/worker-service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search="";

  constructor(private crossService:CrossService,private workerService:WorkerService,private router:Router) {
  }
  ngOnInit(){
    setTimeout(()=>{
      this.searchWorkers();
    },1)

  }

  searchWorkers(){
    if(this.search.length > 0){
      this.workerService.search(this.search).subscribe((res)=>{ //subscribe olmadan apiye gitmez
        this.crossService.setWorker(res);
      });
    }else {
      this.workerService.getWorker().subscribe(res=>{
        this.crossService.setWorker(res)
      })
    }
  }

  openLogin(){
    this.router.navigate(["session/login"]);
  }

  openRegister(){
    this.router.navigate(["session/register"]);
  }
  openWorkers(){
    this.router.navigate(["workers"]);
  }

}
