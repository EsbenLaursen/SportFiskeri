import { Component, OnInit } from '@angular/core';
import {User} from "../../Entities/User";
import {Http, Headers} from "@angular/http";
import {UserService} from "../../Services/user.service";
import {LoginService} from "../../Services/login.service";
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  feedback: { access_token: string};
  errormsg: string;

  constructor(private loginservice: LoginService,
              private snackBar: MdSnackBar, private router: Router
  ) { }

  ngOnInit() {
   // this.errormsg = "";
}

  loginNow(user: User)
  {
  let id;
    this.loginservice.login(user).subscribe((data) => this.feedback = data, (err)=>{ this.errormsg = 'Username or password is wrong, try again';},
      ()=> {this.loginservice.getUserId(user).subscribe(
       (data2) => id=data2,
        ()=> {this.loginservice.setSession(id);
       });
      this.router.navigate(['/home']).then(() => {
        this.snackBar.open("You are logged in", "Ok", {
          duration: 3000,
        });});
      });
  }

}
