import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Topic} from "../../Entities/Topic";
import {TopicService} from "../../Services/topic.service";
import has = Reflect.has;
import {Router} from "@angular/router";
import {LoginService} from "../../Services/login.service";

@Component({
  selector: 'app-forum-index',
  templateUrl: './forum-index.component.html',
  styleUrls: ['./forum-index.component.css']
})
export class ForumIndexComponent implements OnInit {

  isCreatingTopic: boolean;
  topics: Topic[];

  constructor(private tservice:TopicService,
  private router: Router,
  private loginService: LoginService) {
    this.isCreatingTopic = false;

this.topics= [];
  }

  ngOnInit() {
    this.tservice.getAllTopics().subscribe((data) => {
      this.topics = data;
    });
    console.log('in forumindex sessionid'+sessionStorage.getItem('userId'));
    console.log('in forumindex token'+sessionStorage.getItem('token'));

  }
  ShowAddTopic(show:boolean){
      if(this.loginService.isLoggedIn())
      {
        this.isCreatingTopic = show;
      } else {

        this.router.navigate(['/login']);
      }
       }



  AddTopic(topic: Topic)
  {
    let topicReceived;
    this.ShowAddTopic(false);
    if(topic !== null && topic){
      this.tservice.createTopic(topic).subscribe((data) => { topicReceived = data;
        this.tservice.getAllTopics().subscribe((topicsNew) => {
          this.topics = topicsNew;
        });
      }, (err) => console.log(err), () => console.log('TopicReceived: ' + JSON.stringify(topicReceived)));

    }


  }

  createTopic(saveOrCancel: boolean)
  {
    this.isCreatingTopic = saveOrCancel;
  }

}
