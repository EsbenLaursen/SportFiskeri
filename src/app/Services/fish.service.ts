import { Injectable } from '@angular/core';
import {Fish} from '../Entities/Fish';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';
@Injectable()
export class FishService {
  data: string;

  fishes: Fish[];
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {

   // this.fishes = [
   //   { id: 1, Type: 'salmon'},
    //  { id: 2, Type: 'trout'},
   //   { id: 3, Type: 'lobster'},
    //  { id: 4, Type: 'rocktail'},
    //  { id: 5, Type: 'salmon'},
    //  ];
  }

  // getAllFishes(): Fish[] {
   // return this.fishes;
 // }

   getallfishes():  Observable<Fish[]> {
     return this.http
       .get('http://localhost:2240/api/Fish')
       .map(response => response.json() as Fish[]);
  }

  createFish(fish:Fish): Observable<Fish>{
    return this.http
      .post('http://localhost:2240/api/Fis', JSON.stringify({fish}), {headers: this.headers})
       .map(resp => resp.json());
  }
}