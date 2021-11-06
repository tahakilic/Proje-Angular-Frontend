import {NgModule} from "@angular/core";
import {WorkerProfileComponent} from "./worker-profile/worker-profile.component";
import {CommonModule} from "@angular/common";
import {WorkerRoutingModule} from "./worker-routing.module";
import {WorkersComponent} from "./workers/workers.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WorkerMyProfileComponent} from "./worker-my-profile/worker-my-profile.component";

@NgModule({
  declarations:[WorkersComponent,WorkerProfileComponent,WorkerMyProfileComponent],
  imports:[CommonModule,WorkerRoutingModule,ReactiveFormsModule,FormsModule]
})

export class WorkerModule{

}
