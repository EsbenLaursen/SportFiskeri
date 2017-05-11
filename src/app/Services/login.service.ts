import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {User} from "../Entities/User";
import {UserService} from "./user.service";

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

  login(user:User)
  {
    this.params = JSON.stringify(user);
    console.log(this.params);

    this.requestString = "grant_type=password&username=" + user.Username + " &password=" + user.Password;

    this.http.post('http://localhost:53596/token', this.requestString, { headers: this.headers } ).subscribe(
      (data) => this.feedback = data.json(), ()=> {}, () => this.setsession(user)

    );
    //we need an id.

  }
  setsession(user: User){
    console.log('setsession: username:' + user.Username + 'password' + user.Password);
    this.userService.getUserByUsername(user).subscribe( (data) => this.userId = data,
      ()=> {}, () => sessionStorage.setItem('userId', this.userId+'')
    );
    sessionStorage.setItem('token', this.feedback.access_token);
  }
}
