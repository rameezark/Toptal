import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Helpers } from "./helpers";

@Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private router:Router, private helpers :Helpers) {
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!this.helpers.isAuthenticated()){
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

}