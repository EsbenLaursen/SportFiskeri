import { Component, OnInit } from '@angular/core';
import {Topic} from '../../Entities/Topic';
import {TopicService} from "../../Services/topic.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-createtopic',
  templateUrl: './createtopic.component.html',
  styleUrls: ['./createtopic.component.css']
})
export class CreatetopicComponent implements OnInit {


  topic: Topic;

  constructor(private service: TopicService,
              private router: Router) {
    this.topic = new Topic();
  }

  ngOnInit() {
  }

  save() {
      console.log('saving topic with title: ' + this.topic.Header);
      this.service.createTopic(this.topic);
    this.router.navigate(['/forum']);
  }

}
