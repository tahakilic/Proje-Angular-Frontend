import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WorkersComponent} from "./workers/workers.component";
import {WorkerProfileComponent} from "./worker-profile/worker-profile.component";


const routes :Routes = [
  { path:'',component:WorkersComponent },
  {path:':id',component:WorkerProfileComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class WorkerRoutingModule{
}
