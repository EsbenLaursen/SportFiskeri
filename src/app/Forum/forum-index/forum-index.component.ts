import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-forum-index',
  templateUrl: './forum-index.component.html',
  styleUrls: ['./forum-index.component.css']
})
export class ForumIndexComponent implements OnInit {

  isCreatingTopic: boolean;
   @Output('notifylist')
   notifylistNow = new EventEmitter<boolean>();

  constructor() {
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
    this.notifylistNow.emit(saveOrCancel);
  }

}
