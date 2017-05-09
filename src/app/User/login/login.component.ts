import { Component, OnInit } from '@angular/core';
import {User} from "../../Entities/User";
import {Http, Headers} from "@angular/http";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  params: string;
  feedback: string;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  ngOnInit() {
  }

  loginNow(user: User)
  {

    console.log('username: ' + user.Name);
    console.log('Password: ' + user.Password);
    this.params = JSON.stringify(user);
    console.log(this.params);

    this.http.post('http://localhost:2240/api/Login', this.params, {headers: this.headers}).subscribe((resp) => console.log(resp.json()), (err)=> console.log(err), ()=> console.log('logged in'));

  }

}
