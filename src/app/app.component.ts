import { Component } from '@angular/core';
import {FishService} from './fish.service';
import {Fish} from './Fish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  fishes: Fish[];



  constructor(private service: FishService) {
     this.fishes = service.getAllFishes();
  }

}
