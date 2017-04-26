import { Component, OnInit } from '@angular/core';
import {Topic} from "../../Entities/Topic";
import {TopicService} from "../../Services/topic.service";

@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css']
})
export class TopiclistComponent implements OnInit {

  topics: Topic[];



  constructor(private service: TopicService) {
     this.topics = service.getAllTopics();
  }

  ngOnInit() {
  }

}
