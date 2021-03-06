import { Component } from '@angular/core';
import {FishService} from './Services/fish.service';
import {Fish} from './Entities/Fish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  fishes: Fish[];
  fish: Fish;



  constructor(private service: FishService) {
    service.getallfishes().subscribe(data => {this.fishes = data; } );
    //new fish = {id: 0 ,type: 'salmon'}
    //service.createFish(fish).subscribe(data => {this.fish = data; })
  }



}
