import { Injectable } from '@angular/core';
import {Topic} from "../Entities/Topic";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

@Injectable()
export class TopicService {

  topics: Topic[];

  constructor(private http: Http) {

  }

  getAllTopics() : Observable<Topic[]>
  {
    return this.http
      .get('http://localhost:2240/api/Topics')
      .map(response => response.json() as Topic[]);
  }

  getTopic(id: number) : Observable<Topic>
{
  return this.http
      .get('http://localhost:2240/api/Topics/' + id)
       .map(response => response.json() as Topic);
}



}
