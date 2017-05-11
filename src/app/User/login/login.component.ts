import { Component, OnInit } from '@angular/core';
import {User} from "../../Entities/User";
import {Http, Headers} from "@angular/http";
import {UserService} from "../../Services/user.service";
import {LoginService} from "../../Services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {



  constructor(private loginservice: LoginService) { }

  ngOnInit() {
  }

  loginNow(user: User)
  {

    console.log('username: ' + user.Name);
    console.log('Password: ' + user.Password);

this.loginservice.login(user);

  }

}
