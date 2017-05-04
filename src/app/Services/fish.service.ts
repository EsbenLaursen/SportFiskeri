import { Injectable } from '@angular/core';
import {Fish} from '../Entities/Fish';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';
@Injectable()
export class FishService {
  data: string;

  fishes: Fish[];
  params: string;
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {
  }

   getallfishes():  Observable<Fish[]> {
     return this.http
       .get('http://localhost:2240/api/Fish')
       .map(response => response.json() as Fish[]);
  }

  getFish(id: number): Observable<Fish> {
    return this.http
      .get('http://localhost:2240/api/Fish/' + id)
      .map(response => response.json() as Fish);
  }


  createFish(fish:Fish): Observable<Fish>{
    fish.CaughtByUser = {Id: 1};
    return this.http
      .post('http://localhost:2240/api/Fish', JSON.stringify({fish}), {headers: this.headers})
       .map(resp => resp.json());
  }

  putFish(fish: Fish) {
    fish.Type = 'new type' + fish.id;
    this.params = JSON.stringify(fish);
    return this.http.put('http://localhost:2240/api/Fish/' + fish.id,
      this.params, {headers: this.headers})
      .subscribe(resp => console.log(resp.ok));
  }

  deleteFish(fish: Fish) {
    return this.http.delete('http://localhost:2240/api/Fish/' + fish.id)
      .subscribe(resp => console.log(resp.ok));
  }
}
