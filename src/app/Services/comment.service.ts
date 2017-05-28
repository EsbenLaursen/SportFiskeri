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
  url: string = "http://localhost:53596/api/";

  constructor(private http: Http,
              private service: UserService) {
    this.headers.append('Content-Type', 'application/json');
  }



  createComment(comment: Comment) : Observable<string> {
    const userid = parseInt(sessionStorage.getItem("userId"),10);
    const id = comment.Topic.Id;

    comment.WrittenByUserId = userid;
    comment.WrittenByUser = {Id : userid};
    comment.Topic = {Id : id};
    comment.Date = new Date();


    this.headers.append('Content-Type', 'application/json');
    this.params = JSON.stringify(comment);

    //getting the token for the logged in user
    const t = sessionStorage.getItem('token');
    this.headers.append('Authorization', 'Bearer ' + t);

    return this.http
      .post(this.url + 'Comments', this.params, { headers: this.headers})
      .map(response => this.feedback = response.json());

  }


  getAllComments(): Observable<Comment[]> {
    return this.http
      .get(this.url + 'Comments')
      .map(response => response.json() as Comment[]);
  }

  getComment(id: number): Observable<Comment> {
    return this.http
      .get(this.url + 'Comment/' + id)
      .map(response => response.json() as Comment);
  }

  sortList(data: Comment[], topicId: number): Comment[] {
    let sortedComments = [];
    for(let i = 0; i<data.length; i++)
      {
          if(topicId == data[i].TopicId)
          {
              sortedComments.push(data[i]);
          }
      }
      return sortedComments;
  }

  deleteComment(id: number)
    {
      console.log('deleting comment' + id);
   //   let t = sessionStorage.getItem('token');
  //  this.headers.append('Authorization', 'Basic ' + t);
      return this.http.delete(this.url + 'Comments/' + id, { headers: this.headers }).map((resp) => console.log('deleting comment: ' + resp.ok));
  }

  putComment(comment: Comment) {
    this.params = JSON.stringify(comment);
    console.log(this.params);
   ////let t = sessionStorage.getItem('token');
   //this.headers.append('Authorization', 'Basic ' + t);
    return this.http.put(this.url + 'Comments/' + comment.Id, this.params, { headers: this.headers} );

  }
}


