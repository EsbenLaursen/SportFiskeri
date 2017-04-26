import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TopicService} from "../../Services/topic.service";
import {Topic} from "../../Entities/Topic";
import {myData, MyDataService} from "../../Services/my-data.service";

@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.component.html',
  styleUrls: ['./topicdetail.component.css']
})
export class TopicdetailComponent implements OnInit {



  topic: Topic;
  id: number;

  constructor(private service: TopicService,
              private sharedService: MyDataService) {
    this.sharedService=sharedService

    // til lars
   // this._router
   //  .queryParams
   //  .subscribe(params => this.id = params['topicId']);

    this.id = this.sharedService.getData();
    console.log(this.id +"id");

    this.topic = this.service.getTopic( this.id);

  }

  ngOnInit() {

  }

}
