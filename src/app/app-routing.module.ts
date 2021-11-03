import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {WorkerMyProfileComponent} from "./work/worker-my-profile/worker-my-profile.component";
import {LoginGuard} from "./session/login/login.guard";


const routes: Routes = [

  {path:"",redirectTo:"workers",pathMatch:"full"},
  {path:'workers', loadChildren:()=>import('./work/worker.module').then(m=>m.WorkerModule)},
  {path:"session",loadChildren:()=>import("./session/session.module").then(m=>m.SessionModule)},
  {path:"profile/:id",component:WorkerMyProfileComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
