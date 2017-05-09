import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Topic} from "../../Entities/Topic";
import {TopicService} from "../../Services/topic.service";

@Component({
  selector: 'app-forum-index',
  templateUrl: './forum-index.component.html',
  styleUrls: ['./forum-index.component.css']
})
export class ForumIndexComponent implements OnInit {

  isCreatingTopic: boolean;
  topics: Topic[];

  constructor(private tservice:TopicService) {
    this.isCreatingTopic = false;

this.topics= [];
  }

  ngOnInit() {
    this.tservice.getAllTopics().subscribe((data) => {
      this.topics = data;
    });

  }
  ShowAddTopic(show:boolean){

      this.isCreatingTopic = show;
  }



  AddTopic(topic: Topic)
  {
    this.ShowAddTopic(false);
    if(topic !== null && topic){
      this.tservice.createTopic(topic).subscribe((data) => {
        this.tservice.getAllTopics().subscribe((topicsNew) => {
          this.topics = topicsNew;
        });
      }, (err) => console.log(err));

    }


  }

  createTopic(saveOrCancel: boolean)
  {
    this.isCreatingTopic = saveOrCancel;
    console.log('in forum-index: createTopic' + saveOrCancel);
  }

}
