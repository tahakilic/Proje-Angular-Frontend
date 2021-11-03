import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AccountService} from "../../services/account.service";

@Injectable({
  providedIn:"root"
})
export class LoggedInGuard implements CanActivate{
  constructor(private router:Router,
              private accountService:AccountService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    let loggedIn=this.accountService.isLoggedIn();
    if(loggedIn){
      this.router.navigate(["profile/"+this.accountService.userProfileId()])
      return false;
    }

    return true;
  }

}
