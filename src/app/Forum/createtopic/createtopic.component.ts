import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Topic} from '../../Entities/Topic';
import {TopicService} from "../../Services/topic.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-createtopic',
  templateUrl: './createtopic.component.html',
  styleUrls: ['./createtopic.component.css']
})
export class CreatetopicComponent implements OnInit {

 // vi kommer til jeres by vi ødelægger det hele, knepper jeres mødre og vi vil ikk dele
  // while horny

  saveOrCancel: boolean;

  @Output()
    createTopicDone = new EventEmitter<Topic>();

  topic: Topic;

  constructor() {
    this.topic = new Topic();
  }

  ngOnInit() {
  }

  creatingNewTopic(value: boolean) {
    console.log(' creatingNewTopic - value:' + value);
      {
        if(value){
            this.createTopicDone.emit(this.topic);
        }
        else{
          this.createTopicDone.emit(null);
        }
      }

  }

}
