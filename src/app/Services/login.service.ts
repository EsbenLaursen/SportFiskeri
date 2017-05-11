import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {User} from "../Entities/User";
import {UserService} from "./user.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService {


  requestString: string;
  userId: number;
  params: string;
  feedback: { access_token: string};

  private headers: Headers;
  constructor(private http: Http, private userService: UserService) {
    this.headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  }

  login(user:User): Observable<any>
  {
    this.params = JSON.stringify(user);
    console.log(this.params);

    this.requestString = "grant_type=password&username=" + user.Username + " &password=" + user.Password;

   return this.http.post('http://localhost:53596/token', this.requestString, { headers: this.headers } ).map(
      (resp) => this.feedback = resp.json()
   //   (data) => this.feedback = data.json(),
   //   ()=> {}, () => this.setsession(user) // finally

    );


  }


  setSession(id: number): boolean
  {
    if(id != null && id)
    {
      sessionStorage.setItem('userId', id+'');
      sessionStorage.setItem('token', this.feedback.access_token);
      return true;
    } else
    {
        return false;
    }


  }


  getUserId(user: User): Observable<number> {

   return this.userService.getUserByUsername(user).map((data) => this.userId = data
   //   () => {
   //   }, () => sessionStorage.setItem('userId', this.userId + '')
    );



  }
  isLoggedIn(): boolean
  {
    return (sessionStorage.getItem('userId') != null && sessionStorage.getItem('userId') && parseInt(sessionStorage.getItem('userId'), 10)>0);
  }
}
