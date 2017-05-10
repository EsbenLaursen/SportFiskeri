import { Component, OnInit } from '@angular/core';
import {User} from "../../Entities/User";
import {Http, Headers} from "@angular/http";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  requestString: string;

  params: string;
  feedback: { access_token: string};
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) { }

  ngOnInit() {
  }

  loginNow(user: User)
  {

    console.log('username: ' + user.Name);
    console.log('Password: ' + user.Password);
    this.params = JSON.stringify(user);
    console.log(this.params);

    this.requestString = "grant_type=password&username=" + user.Name + " &password=" + user.Password;

    this.http.post('http://localhost:53596/token', this.requestString, { headers: this.headers } ).subscribe(
      (data) => this.feedback = data.json(), ()=> {}, () => sessionStorage.setItem('token', this.feedback.access_token)
    );


  }

}
