import { Injectable } from '@angular/core';
import {User} from '../Entities/User';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {find} from "rxjs/operator/find";
@Injectable()
export class UserService {

  user: User;
  params: string;
  feedback: string;
  url: string = "http://localhost:53596/api/";

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {

  }



  createUser(user: User): Observable<string> {

    this.params = JSON.stringify(user);
    console.log('trying to create user' + this.params);


    return this.http
      .post(this.url + 'Users', this.params, {headers: this.headers})
      .map((resp) => this.feedback = resp.json());
  }

  getUserByUsername(user: User): Observable<number>{
     return this.http.get(this.url + 'UserByUsername?Username=' + user.Username).map( (response) => response.json() as number);
  }

  getAllUsers(): Observable<User[]> {
    return this.http
      .get(this.url +  + 'Users')
      .map(response => response.json() as User[]);
  }

  getUser(id: number): Observable<User> {
    return this.http
      .get(this.url + 'Users/' + id)
      .map(response => response.json() as User);
  }

  putUser(user: User) {
    this.params = JSON.stringify(user);
    return this.http.put(this.url + 'Users/' + user.Id,
      this.params, {headers: this.headers})
      .subscribe(resp => console.log(resp.ok));
  }

  deleteUser(user: User) {
    return this.http.delete(this.url + 'Users/' + user.Id)
      .subscribe(resp => console.log(resp.ok));
  }


}
