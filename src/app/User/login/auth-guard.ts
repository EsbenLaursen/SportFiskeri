
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private router: Router)
    {}

    canActivate(): Observable<boolean>
    {
      console.log('in canActivate');
        if(sessionStorage.getItem('token') !== null && sessionStorage.getItem('token'))
        {
          console.log('true');
           return Observable.of(true);
        } else {
          console.log('false')
          this.router.navigate(['/login']);
          return Observable.of(false);
        }
    }
}
