import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WorkersComponent} from "./workers/workers.component";
import {WorkerProfileComponent} from "./worker-profile/worker-profile.component";
import {LoginGuard} from "../session/login/login.guard";
import {WorkerMyProfileComponent} from "./worker-my-profile/worker-my-profile.component";
import {WorkerMyProfileSettingsComponent} from "./worker-my-profile-settings/worker-my-profile-settings.component";


const routes :Routes = [
  {path:'',component:WorkersComponent },
  {path:':id',component:WorkerProfileComponent},
  {path:"profile/:id",component:WorkerMyProfileComponent,canActivate:[LoginGuard]},
  {path:"profile/settings/:id",component:WorkerMyProfileSettingsComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class WorkerRoutingModule{
}
