import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WorkersComponent} from "./workers/workers.component";
import {WorkerProfileComponent} from "./worker-profile/worker-profile.component";
import {LoginGuard} from "../session/login/login.guard";
import {WorkerMyProfileComponent} from "./worker-my-profile/worker-my-profile.component";


const routes :Routes = [
  {path:'',component:WorkersComponent },
  {path:':id',component:WorkerProfileComponent},
  {path:"profile/:id",component:WorkerMyProfileComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class WorkerRoutingModule{
}
