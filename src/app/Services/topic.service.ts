import { Injectable } from '@angular/core';
import {Topic} from "../Entities/Topic";

@Injectable()
export class TopicService {

  topics: Topic[];

  constructor() {

    this.topics = [
      { id: 1, name: 'topic1'},
      { id: 2, name: 'topic2'},
      { id: 3, name: 'topic3'},
      { id: 4, name: 'topic4'},
      { id: 5, name: 'topic5'},
    ];
  }

  getAllTopics() : Topic[]
  {
      return this.topics;
  }

  getTopic(id: number) : Topic
{
      return this.topics.find(topic => topic.id === id);
}



}
