import {Injectable} from '@angular/core';
import {Topic} from '../Entities/Topic';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';

@Injectable()
export class TopicService {

  topics: Topic[];
  private headers = new Headers();
  params: string;
  feedback: string;
  url: string = "http://localhost:53596/api/";

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }


  createTopic(topic: Topic) : Observable<string> {
    topic.WrittenByUser = {Id: 1};
    topic.Date = new Date();
    this.params = JSON.stringify(topic);
    console.log('trying to create topic' + this.params);


    return this.http
      .post(this.url + 'Topics', this.params, {headers: this.headers})
      .map((resp) => this.feedback = resp.json());
  }

  getAllTopics(): Observable<Topic[]> {
    return this.http
      .get(this.url + 'Topics')
      .map(response => response.json() as Topic[]);
  }

  getTopic(id: number): Observable<Topic> {
    return this.http
      .get(this.url + 'Topics/' + id)
      .map(response => response.json() as Topic);
  }

  putTopic(topic: Topic) {
    topic.Header = 'new title' + topic.Id;
    this.params = JSON.stringify(topic);
    return this.http.put(this.url + 'Topics/' + topic.Id,
      this.params, {headers: this.headers})
      .subscribe(resp => console.log(resp.ok));
  }

  deleteTopic(topic: Topic) {
      return this.http.delete(this.url + 'Topics/' + topic.Id)
        .subscribe(resp => console.log(resp.ok));
  }


}
