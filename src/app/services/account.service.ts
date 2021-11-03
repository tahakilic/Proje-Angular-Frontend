import {Injectable} from "@angular/core";
import {User} from "../model/user";
import UserLogin = User.UserLogin;
import {WorkerModel} from "../model/worker-model";

@Injectable({
  providedIn:"root"
})
export class AccountService{
  constructor() {
  }

  loggedIn=false;
  profileId!:number;

  login(userLogin:WorkerModel.WorkerItem){
    if(userLogin.id !== null){
      this.profileId=userLogin.id;
      this.loggedIn=true;
      localStorage.setItem("isLogged",userLogin.firstName)
      return true;
    }
    return false;
  }

  isLoggedIn(){
    return this.loggedIn
  }

  userProfileId(){
    return this.profileId;
  }

  logOut(){
    localStorage.removeItem("isLogged")
    this.loggedIn=false;
  }

}
