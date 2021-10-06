import {NgModule} from "@angular/core";
import {WorkerProfileComponent} from "./worker-profile/worker-profile.component";
import {CommonModule} from "@angular/common";
import {WorkerRoutingModule} from "./worker-routing.module";
import {WorkersComponent} from "./workers/workers.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations:[WorkersComponent,WorkerProfileComponent],
  imports:[CommonModule,WorkerRoutingModule,ReactiveFormsModule]
})

export class WorkerModule{

}
