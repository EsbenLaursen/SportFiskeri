import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {User} from "../../Entities/User";

@Component({
  selector: 'app-login-view',
  templateUrl: 'login-view.component.html',
  styleUrls: ['login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  user: User;

  @Input()
  loginError: string;

  @Output('login')
  tryloginEmitter = new EventEmitter();

  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }


  tryLogin() {
    this.tryloginEmitter.emit(this.user);
  }
}
