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


  createTopic(topic: Topic): Observable<Topic> {
    // Getting the session id
    const id = sessionStorage.getItem('userId');
    //topic is created with specific id
    topic.WrittenByUser = {Id: parseInt(id,10)};
    topic.Date = new Date();
    this.params = JSON.stringify(topic);

    //getting the token for the logged in user
    const t = sessionStorage.getItem('token');
    this.headers.append('Authorization', 'Bearer ' + t);

    let topicReceived;
    return this.http
      .post(this.url + 'Topics', this.params, {headers: this.headers})
      .map((resp) => topicReceived = resp.json() as Topic);
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
    let t = sessionStorage.getItem('token');
    this.headers.append('Authorization', 'Basic ' + t);

      return this.http.delete(this.url + 'Topics/' + topic.Id,  {headers: this.headers})
        .map(resp => console.log(resp.ok));


  }


}
