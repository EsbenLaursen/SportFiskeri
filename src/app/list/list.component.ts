import { Component, OnInit } from '@angular/core';
import {FishService} from "../Services/fish.service";
import {Fish} from "../Entities/Fish";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  fishes: Fish[]
  constructor(private service: FishService) { }
title: "List of fishes";
  ngOnInit() {
    this.service.getallfishes().subscribe(data => {this.fishes = data; } );
  }

}
