import { Component, OnInit } from '@angular/core';
import {FishService} from "../Services/fish.service";
import {Observable} from "rxjs/Observable";
import {Fish} from "../Entities/Fish";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

klessthan: number;
kmorethan: number;
  smorethan: number;
  slessthan: number;
  isReached: boolean;
  fish: Fish[];

  constructor(private fishserive: FishService) {
    this.klessthan = 0;
    this.kmorethan = 0;
    this.slessthan = 0;
    this.smorethan = 0;
    this.isReached = false;


  }

  ngOnInit() {
    this.fishserive.getallfishes().subscribe((data)=> this.fish = data,(err) => console.log(err),()=> this.sortFish());

  }

  sortFish(){
  for(let i = 0; i<this.fish.length; i++) {
    const f = this.fish[i];
    if(f.Location === 'Konge å')
    {
      if (f.Length < 75) {
        this.klessthan++;
      } else {
        this.kmorethan++;
      }
    }else {
      if (f.Length < 75) {
        this.slessthan++;
      } else {
        this.smorethan++;
      }
    }
    if(this.slessthan >=15)
    {
      this.isReached = true;
    }



  }}}
