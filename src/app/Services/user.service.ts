import { Injectable } from '@angular/core';
import {User} from '../Entities/User';
@Injectable()
export class UserService {

  user: User;

  constructor() {
    this.user = new User();
    this.user.name = 'Esben';
    this.user.Id = 1;

  }
   getUser(): User {
    return this.user;
  }


}
