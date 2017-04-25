import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Topic} from "../../Entities/Topic";
import {Router} from "@angular/router";
import {TopicService} from "../../Services/topic.service";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input()
  topic: Topic;

  @Output()
  outputTopic = new EventEmitter<Topic>();

  constructor(private router: Router,
              private service: TopicService) {

  }

  ngOnInit() {
  }

  goToTopic(id: number) {
    // this.topic = this.service.getTopic(id);
    this.outputTopic.emit(this.topic);
    this.router.navigate(['/detail', id]);
  }

}
