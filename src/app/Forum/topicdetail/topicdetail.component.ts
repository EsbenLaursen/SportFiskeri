import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TopicService} from "../../Services/topic.service";
import {Topic} from "../../Entities/Topic";

@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.component.html',
  styleUrls: ['./topicdetail.component.css']
})
export class TopicdetailComponent implements OnInit {

  @Input()
  topic: Topic;
  constructor(private _router: ActivatedRoute) {
    console.log("ergrg");
    console.log("ergrg");
    console.log("ergrg");
    console.log("ergrg");
    this._router
      .data
      .subscribe(v => console.log(v));

  }

  ngOnInit() {



      this.topic = new Topic();
  }

}
