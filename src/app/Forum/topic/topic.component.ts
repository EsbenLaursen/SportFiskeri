import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Topic} from "../../Entities/Topic";
import {Router} from "@angular/router";
import {TopicService} from "../../Services/topic.service";
import {MyDataService} from "../../Services/my-data.service";
import {Observable} from "rxjs/Observable";
import {User} from "../../Entities/User";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input()
  topic: Topic;

  topicWithUser: Topic;

  constructor(private router: Router,
              private service: TopicService,
              private sharedService: MyDataService) {
    this.topicWithUser = new Topic();
    this.topicWithUser.WrittenByUser = new User();
    this.sharedService = sharedService;
  }

  ngOnInit() {
    console.log('on init');
    this.service.getTopic(this.topic.Id).subscribe((data) => this.topicWithUser = data);
  }

  goToTopic(id: number) {
    this.sharedService.saveData(id);

    this.router.navigate(['/detail', id]);
  }

}
