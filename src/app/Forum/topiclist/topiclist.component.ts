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

  topics: Topic[];

  //@Input()


  constructor(private service: TopicService) {
     service.getAllTopics().subscribe( (data) => this.topics = data);
     console.log('in topiclist' + this.topics);
  }

  ngOnInit() {
   this.service.getAllTopics().subscribe( (data) => this.topics = data);
  }

  notifyListEvent(value: boolean)
  {
      console.log('wup wup');
  }

}
