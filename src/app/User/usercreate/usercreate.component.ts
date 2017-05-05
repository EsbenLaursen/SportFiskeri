import { Component, OnInit } from '@angular/core';
import {UserService} from "../../Services/user.service";
import {User} from "../../Entities/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {
user: User;
  constructor(private userservice: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {


  }
  createUser(user: User){
    this.userservice.createUser(user).subscribe((resp)=> console.log(JSON.stringify(resp)), (err) =>console.log(err), () => this.router.navigate(['/home']));

  }

}
