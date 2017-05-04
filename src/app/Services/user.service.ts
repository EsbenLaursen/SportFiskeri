import { Injectable } from '@angular/core';
import {User} from '../Entities/User';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
@Injectable()
export class UserService {

  user: User;
  params: string;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    this.user = new User();
    this.user.name = 'Esben';
    this.user.Id = 1;

  }
   getUser(): User {
    return this.user;
  }


}
