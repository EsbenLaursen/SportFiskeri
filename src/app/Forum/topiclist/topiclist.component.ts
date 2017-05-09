import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Topic} from "../../Entities/Topic";
import {TopicService} from "../../Services/topic.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css']
})
export class TopiclistComponent implements OnInit {

  @Input()
  topics: Topic[];


  constructor() {
    this.topics = [];
  }

  ngOnInit() {

      console.log(!!this.topics);
      console.log(this.topics.length);
  }


}
