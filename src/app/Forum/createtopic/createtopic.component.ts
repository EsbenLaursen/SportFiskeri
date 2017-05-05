import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Topic} from '../../Entities/Topic';
import {TopicService} from "../../Services/topic.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-createtopic',
  templateUrl: './createtopic.component.html',
  styleUrls: ['./createtopic.component.css']
})
export class CreatetopicComponent implements OnInit {

 // vi kommer til jeres by vi ødelægger det hele, knepper jeres mødre og vi vil ikk dele
  // while horny

  saveOrCancel: boolean;

  @Output('createtopic')
    createTopicDone = new EventEmitter<boolean>();

  topic: Topic;

  constructor(private service: TopicService,
              private router: Router) {
    this.topic = new Topic();
  }

  ngOnInit() {
  }

  creatingNewTopic(value: boolean) {
    console.log(' creatingNewTopic - value:' + value);
      {
        if(value === true){

          this.service.createTopic(this.topic).subscribe((data) => console.log(JSON.stringify(data)),
            (err) => console.log(err), ()=> this.Callback());
        }
      }

  }

  private Callback() {
    console.log('navigatong');

    this.router.navigate(['']);
    this.router.navigate(['/forum']);
    this.createTopicDone.emit(this.saveOrCancel);
  }

}
