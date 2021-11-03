import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {LoggedInGuard} from "./login/loggedIn.guard";

const routes:Routes =[
  {path:"login",component:LoginComponent,canActivate:[LoggedInGuard]},
  {path:"register",component:RegisterComponent,canActivate:[LoggedInGuard]}
]


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SessionRoutingModule{

}
