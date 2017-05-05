import { Injectable } from '@angular/core';
import {User} from '../Entities/User';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
@Injectable()
export class UserService {

  user: User;
  params: string;
  feedback: string;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {

  }


  createUser(user: User): Observable<string> {

    this.params = JSON.stringify(user);
    console.log('trying to create user' + this.params);


    return this.http
      .post('http://localhost:2240/api/Users', this.params, {headers: this.headers})
      .map((resp) => this.feedback = resp.json());
  }

  getAllUsers(): Observable<User[]> {
    return this.http
      .get('http://localhost:2240/api/Users')
      .map(response => response.json() as User[]);
  }

  getUser(id: number): Observable<User> {
    return this.http
      .get('http://localhost:2240/api/Users/' + id)
      .map(response => response.json() as User);
  }

  putUser(user: User) {
    this.params = JSON.stringify(user);
    return this.http.put('http://localhost:2240/api/User/' + user.Id,
      this.params, {headers: this.headers})
      .subscribe(resp => console.log(resp.ok));
  }

  deleteUser(user: User) {
    return this.http.delete('http://localhost:2240/api/Users/' + user.Id)
      .subscribe(resp => console.log(resp.ok));
  }


}
