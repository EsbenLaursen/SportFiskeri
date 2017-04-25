import { Injectable } from '@angular/core';
import {Fish} from '../Entities/Fish';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class FishService {
  data: string;

  fishes: Fish[];

  constructor(private http: Http) {

    this.fishes = [
      { id: 1, type: 'salmon'},
      { id: 2, type: 'trout'},
      { id: 3, type: 'lobster'},
      { id: 4, type: 'rocktail'},
      { id: 5, type: 'salmon'},
      ];
  }

  getAllFishes(): Fish[] {
    return this.fishes;
  }

  // getallfishes():  any {

   // this.http.get('http://localhost:2240/api/fish/1').subscribe(
   //   (resp) => { this.data = JSON.stringify(resp); );
   //   }
   // );
   // return this.data;
  // }


}
