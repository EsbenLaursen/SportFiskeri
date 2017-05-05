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


  constructor(private tservice:TopicService) {
    this.isCreatingTopic = false;


  }

  ngOnInit() {
  }
  AddTopic()
  {
      this.isCreatingTopic = !this.isCreatingTopic;
  }

  createTopic(saveOrCancel: boolean)
  {
    this.isCreatingTopic = saveOrCancel;
    console.log('in forum-index: createTopic' + saveOrCancel);
    // this.notifylistNow.emit(saveOrCancel);
    this.updatethislist();
  }

  updatethislist()
  {
    let t: Topic[];
    return this.tservice.getAllTopics().subscribe((data) => t = data);
  }

}
