import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {Comment} from "../Entities/Comment";
import {Topic} from "../Entities/Topic";

@Injectable()
export class CommentService {

  constructor(private http: Http) { }

  createComment(comment: Comment)
  {

  }


  getAllComments() : Observable<Comment[]>
  {
    return this.http
      .get('http://localhost:2240/api/Comment')
      .map(response => response.json() as Comment[]);
  }

  getComment(id: number) : Observable<Comment>
  {
    return this.http
      .get('http://localhost:2240/api/Comment/' + id)
      .map(response => response.json() as Comment);
  }

  //TODO
  getCommentsWithTopicId(id: number) : Observable<Comment>
  {
    return this.http
      .get('http://localhost:2240/api/Comment/ ???' + id)
      .map(response => response.json() as Comment);
  }

}


