import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Topic} from "../../Entities/Topic";
import {TopicService} from "../../Services/topic.service";
import has = Reflect.has;
import {Router} from "@angular/router";

@Component({
  selector: 'app-forum-index',
  templateUrl: './forum-index.component.html',
  styleUrls: ['./forum-index.component.css']
})
export class ForumIndexComponent implements OnInit {

  isCreatingTopic: boolean;
  topics: Topic[];

  constructor(private tservice:TopicService,
  private router: Router) {
    this.isCreatingTopic = false;

this.topics= [];
  }

  ngOnInit() {
    this.tservice.getAllTopics().subscribe((data) => {
      this.topics = data;
    });
    console.log('in forumindex sessionid'+sessionStorage.getItem('userId'));

  }
  ShowAddTopic(show:boolean){
      if(sessionStorage.getItem('userId') != null && sessionStorage.getItem('userId') && parseInt(sessionStorage.getItem('userId'), 10)>0)
      {
        this.isCreatingTopic = show;
      } else {

        this.router.navigate(['/login']);
      }
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
  }

}
