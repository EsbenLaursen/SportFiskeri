import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-index',
  templateUrl: './forum-index.component.html',
  styleUrls: ['./forum-index.component.css']
})
export class ForumIndexComponent implements OnInit {

  isCreatingTopic: boolean;
  not: string;
  yes: string;
  buttontext: string;

  constructor() {
    this.isCreatingTopic = false;
    this.not = 'Add Topic';
    this.yes = ' Cancel';
    this.buttontext = this.not;
  }

  ngOnInit() {
  }
  AddTopic()
  {
      this.isCreatingTopic = !this.isCreatingTopic;
      if (this.isCreatingTopic) {
        this.buttontext = this.yes;
      }else {
        this.buttontext = this.not;
      }
  }

}
