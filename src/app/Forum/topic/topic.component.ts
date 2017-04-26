import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Topic} from "../../Entities/Topic";
import {Router} from "@angular/router";
import {TopicService} from "../../Services/topic.service";
import {MyDataService} from "../../Services/my-data.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input()
  topic: Observable<Topic>;

  constructor(private router: Router,
              private service: TopicService,
              private sharedService: MyDataService) {
    this.sharedService = sharedService;
  }

  ngOnInit() {
  }

  goToTopic(id: number) {
    this.sharedService.saveData(id);

    this.router.navigate(['/detail', id]);
  }

}
