import {NgModule} from "@angular/core";
import {WorkerProfileComponent} from "./worker-profile/worker-profile.component";
import {CommonModule} from "@angular/common";
import {WorkerRoutingModule} from "./worker-routing.module";
import {WorkersComponent} from "./workers/workers.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WorkerProfileSettingsComponent } from './worker-my-profile-settings/worker-profile-settings.component';

@NgModule({
  declarations:[WorkersComponent,WorkerProfileComponent, WorkerProfileSettingsComponent],
  imports:[CommonModule,WorkerRoutingModule,ReactiveFormsModule]
})

export class WorkerModule{

}
