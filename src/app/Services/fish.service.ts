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
  url: string = "http://localhost:53596/api/";
  private headers : Headers;
  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

   getallfishes():  Observable<Fish[]> {
     return this.http
       .get('http://localhost:53596/api/Fish')
       .map(response => response.json() as Fish[]);
  }

  getFish(id: number): Observable<Fish> {
    return this.http
      .get('http://localhost:53596/api/Fish/' + id)
      .map(response => response.json() as Fish);
  }


  createFish(fish:Fish): Observable<Fish>{
    fish.CaughtByUser = {Id: 1};
    fish.CaughtByUserId = 1;
    fish.DayCaught = new Date;
    const para = JSON.stringify(fish);

    console.log('parameter object: '+para);
    return this.http
      .post(this.url + 'Fish', para, {headers: this.headers})
       .map(resp => resp.json());
  }

  putFish(fish: Fish) {
    fish.Type = 'new type' + fish.id;
    this.params = JSON.stringify(fish);
    return this.http.put(this.url + 'Fish/' + fish.id,
      this.params, {headers: this.headers})
      .subscribe(resp => console.log(resp.ok));
  }

  deleteFish(fish: Fish) {
    return this.http.delete(this.url + 'Fish/' + fish.id)
      .subscribe(resp => console.log(resp.ok));
  }
}
