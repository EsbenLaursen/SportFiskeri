import { Injectable } from '@angular/core';
import {Fish} from './Fish';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class FishService {
  data: string;

  fishes: Fish[];

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


}
