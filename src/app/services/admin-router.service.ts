import { Injectable } from '@angular/core';
import {CanActivate,Router,ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import{IsLoginService} from "../core/login/is-login.service";

@Injectable()
export class AdminRouterService {

  constructor(private autorizacionService:IsLoginService,private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  	let isLogged=this.autorizacionService.isLogged.value;
  	if (isLogged) {
	    if(this.autorizacionService.role.value==0){
	        return true;
	    }else {
	      this.router.navigate(['/']);
	    return false;
	  }
	}
	else{
		this.router.navigate(['/']);
	    return false;
	}
}

}
