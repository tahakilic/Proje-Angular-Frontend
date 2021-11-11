import {NgModule} from "@angular/core";
import {WorkerProfileComponent} from "./worker-profile/worker-profile.component";
import {CommonModule} from "@angular/common";
import {WorkerRoutingModule} from "./worker-routing.module";
import {WorkersComponent} from "./workers/workers.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WorkerMyProfileComponent} from "./worker-my-profile/worker-my-profile.component";
import {WorkerMyProfileSettingsComponent} from "./worker-my-profile-settings/worker-my-profile-settings.component";

@NgModule({
  declarations:[
    WorkersComponent,
    WorkerProfileComponent,
    WorkerMyProfileComponent,
    WorkerMyProfileSettingsComponent],
  imports:[
    CommonModule,
    WorkerRoutingModule,
    ReactiveFormsModule,
    FormsModule]
})

export class WorkerModule{

}
