import { Component, OnInit } from '@angular/core';
import {Fish} from "../../Entities/Fish";
import {FishService} from "../../Services/fish.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fish: Fish;

  constructor(private fishservice: FishService, private router:Router) {
    this.fish = new Fish();
  }

  ngOnInit() {
  }
save()
{
  console.log('saving fish');
  this.fishservice.createFish(this.fish);
  this.router.navigate(['/forum']);
}
}
