import { Component, OnInit } from '@angular/core';
import {FishService} from "../Services/fish.service";
import {Observable} from "rxjs/Observable";
import {Fish} from "../Entities/Fish";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() {
  }

  ngOnInit() {
  }

}
