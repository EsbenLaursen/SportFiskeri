import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {User} from "../Entities/User";
import {UserService} from "./user.service";

@Injectable()
export class LoginService {

  requestString: string;

  params: string;
  feedback: { access_token: string};

  private headers: Headers;
  constructor(private http: Http, private service: UserService) {
    this.headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  }

  login(user:User)
  {
    this.params = JSON.stringify(user);
    console.log(this.params);

    this.requestString = "grant_type=password&username=" + user.Name + " &password=" + user.Password;

    this.http.post('http://localhost:53596/token', this.requestString, { headers: this.headers } ).subscribe(
      (data) => this.feedback = data.json(), ()=> {}, () => this.setsession(user.Id)

    );
  }
  setsession(id: number){
    sessionStorage.setItem('token', this.feedback.access_token);
    sessionStorage.setItem('userId', id+'');



  }
}
