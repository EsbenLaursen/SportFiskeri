import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TopicService} from '../../Services/topic.service';
import {Topic} from '../../Entities/Topic';
import {myData, MyDataService} from '../../Services/my-data.service';
import {Observable} from 'rxjs/Observable';
import {Comment} from '../../Entities/Comment';
import {CommentService} from '../../Services/comment.service';
import {LoginService} from "../../Services/login.service";
import {UserService} from "../../Services/user.service";
import {User} from "../../Entities/User";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.component.html',
  styleUrls: ['./topicdetail.component.css']
})
export class TopicdetailComponent implements OnInit {


  isLoggedIn: boolean;
  userCanEditDelete: boolean = false;
  userCreatedTopic: User;

  loggedInUserId: number;

  topic: Topic;
  id: number;
  comment: Comment;
  comments: Comment[];
  sortedByTopicIdComments: Comment[];

  constructor(private commentService: CommentService,
              private sharedService: MyDataService,
              private  topicService: TopicService,
              private  userService: UserService,
              private loginService: LoginService,
              private router: Router) {

    this.sharedService = sharedService;
    this.id = this.sharedService.getData();
    this.comment = new Comment();
    this.comment.WrittenByUser = new User();
    this.topic = new Topic();
    this.userCreatedTopic = new User();
    this.loggedInUserId = 0;
    this.sortedByTopicIdComments = [];
    this.topic.Header = '' +
      'Loading comments...';
  }

  ngOnInit() {
 this.topicService.getTopic( this.id).subscribe( (data) => this.topic = data, ()=>{}, ()=>{
      this.initUser();
    });


  }

  initUser(){
    console.log('topic writtenby: '+this.topic.WrittenByUser.Id);

    this.userCreatedTopic = this.topic.WrittenByUser;
    this.isLoggedIn = this.loginService.isLoggedIn();
    if(this.isLoggedIn)
    {
      this.loggedInUserId = parseInt(sessionStorage.getItem('userId'), 10);
      if(this.loggedInUserId === this.topic.WrittenByUser.Id)
      {
        console.log('can edit');
        this.userCanEditDelete = true;
      }
    }
    this.getComments();
  }

  private getComments() {
    this.commentService.getAllComments().subscribe((data) => this.comments = data, () => {
    }, () => {
      this.sortedByTopicIdComments = this.commentService.sortList(this.comments, this.id) });
  }



    onSubmit() {

      this.comment.Topic = this.topic;
      this.comment.TopicId = this.topic.Id;
         this.commentService.createComment(this.comment).subscribe( () => {}, (err ) => {console.log(err)},
           () =>  this.topicService.getTopic( this.id).subscribe( (data) => this.topic = data, ()=>{}, ()=> this.getComments()));
    }

  editHeader()
  {
      if(this.loginService.isLoggedIn)
      {

      }
      this.topicService.putTopic(this.topic);
  }
  deleteTopic()
  {
      this.topicService.deleteTopic(this.topic).subscribe((data)=> console.log('received from deleteTopic service: ' + data), ()=> {}, ()=> this.router.navigate(['/forum'])  );

  }
  deleteComment(id: number)
  {
      this.commentService.deleteComment(id);
  }

}
