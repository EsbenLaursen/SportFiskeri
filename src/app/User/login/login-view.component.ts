import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from "../../Entities/User";

@Component({
  selector: 'app-login-view',
  templateUrl: 'login-view.component.html',
  styleUrls: ['login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  user: User;

  @Output('login')
  tryloginEmitter = new EventEmitter();

  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }


  tryLogin()
  {
     this.tryloginEmitter.emit(this.user);
  }
}
