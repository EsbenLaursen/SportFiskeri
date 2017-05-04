import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {Comment} from '../Entities/Comment';
import {Topic} from '../Entities/Topic';
import {Headers} from '@angular/http';
import {UserService} from './user.service';


@Injectable()
export class CommentService {

  private headers = new Headers();
  params: string;
  feedback: string;

  constructor(private http: Http,
              private service: UserService) {
  }

  createComment(comment: Comment) {
    const id = comment.Topic.Id;

    comment.WrittenByUser = {Id : 1};
    comment.Topic = {Id : id};
    comment.Date = new Date();


    this.headers.append('Content-Type', 'application/json');
    this.params = JSON.stringify(comment);
    console.log('trying to create comment' + this.params);


    return this.http
      .post('http://localhost:2240/api/Comments', this.params, { headers: this.headers})
      .subscribe(resp => console.log(resp.json()));

  }

  createComment2(comment: Comment) : Observable<string> {
    const id = comment.Topic.Id;

    comment.WrittenByUser = {Id : 1};
    comment.Topic = {Id : id};
    comment.Date = new Date();


    this.headers.append('Content-Type', 'application/json');
    this.params = JSON.stringify(comment);
    console.log('trying to create comment' + this.params);


    return this.http
      .post('http://localhost:2240/api/Comments', this.params, { headers: this.headers})
      .map(response => this.feedback = response.json());

  }


  getAllComments(): Observable<Comment[]> {
    return this.http
      .get('http://localhost:2240/api/Comment')
      .map(response => response.json() as Comment[]);
  }

  getComment(id: number): Observable<Comment> {
    return this.http
      .get('http://localhost:2240/api/Comment/' + id)
      .map(response => response.json() as Comment);
  }

  // TODO
  getCommentsWithTopicId(id: number): Observable<Comment> {
    return this.http
      .get('http://localhost:2240/api/Comment/ ???' + id)
      .map(response => response.json() as Comment);
  }

}


