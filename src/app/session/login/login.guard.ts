import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AccountService} from "../../services/account.service";

@Injectable({
  providedIn:"root"
})
export class LoginGuard implements CanActivate{
  constructor(private router:Router,
              private accountService:AccountService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let logged=this.accountService.isLoggedIn();
    if(logged){
      return true;
    }
    this.router.navigate(["session/login"])
    return false;

  }

}
