import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TopicService} from "../../Services/topic.service";
import {Topic} from "../../Entities/Topic";
import {myData, MyDataService} from "../../Services/my-data.service";
import {Observable} from "rxjs/Observable";
import {Comment} from "../../Entities/Comment";
import {CommentService} from "../../Services/comment.service";

@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.component.html',
  styleUrls: ['./topicdetail.component.css']
})
export class TopicdetailComponent implements OnInit {



  topic: Topic;
  id: number;
  comment: Comment;

  constructor(private service: TopicService,
              private commentService: CommentService,
              private sharedService: MyDataService) {
    this.sharedService=sharedService

    // til lars
   // this._router
   //  .queryParams
   //  .subscribe(params => this.id = params['topicId']);

    this.id = this.sharedService.getData();
    console.log(this.id +"id");


    this.comment = new Comment();
    this.topic = new Topic();
    this.topic.Header = "" +
      "Loading comments...";
  }

  ngOnInit() {
    this.service.getTopic( this.id).subscribe( (data) => this.topic = data);
  }

    onSubmit()
    {
       this.comment.Topic = this.topic;
       this.commentService.createComment(this.comment);
    }

}
