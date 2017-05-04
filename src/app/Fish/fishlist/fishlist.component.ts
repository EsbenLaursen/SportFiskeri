import { Component, OnInit } from '@angular/core';
import {FishService} from "../../Services/fish.service";
import {Fish} from "../../Entities/Fish";

@Component({
  selector: 'app-fishlist',
  templateUrl: './fishlist.component.html',
  styleUrls: ['./fishlist.component.css']
})
export class FishlistComponent implements OnInit {

  fish: Fish[];

  constructor(private fishservice: FishService) { }

  ngOnInit() {

    this.fishservice.getallfishes().subscribe((res) => this.fish = res);
  }

}
