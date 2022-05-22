import { Injectable} from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,UrlTree } from "@angular/router";

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean | UrlTree> {
  
    const ret = await Storage.get({ key: 'adminlogindetails'});
    if (ret.value == null){
      //this.router.navigate(["login"]);
      return false;
    }
    //alert(ret.value)
    return true;
}

  
}