import {Component, EventEmitter, OnInit, Output, SimpleChanges} from '@angular/core';
import {Fish} from "../../Entities/Fish";
import {FishService} from "../../Services/fish.service";
import {Router} from "@angular/router";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fish: Fish;
  modelfordate: NgbDateStruct;
  date: Date


  constructor(private fishservice: FishService, private router:Router) {
    this.fish = new Fish();
    this.date = new Date();

   // this.modelfordate = {year: this.date.getFullYear(), month:this.date.getMonth(), day:this.date.getDate()};
  }

  ngOnInit() {
    this.date = new Date();
    //this.modelfordate = {year: this.date.getFullYear(), month:this.date.getMonth(), day:this.date.getDate()};
  }

save(saveOrCancel: boolean)
{
  if(saveOrCancel)
  {


    this.date.setDate(this.modelfordate.day);
    this.date.setMonth(this.modelfordate.month -1);
    this.date.setFullYear(this.modelfordate.year);

    this.fish.DayCaught = this.date;

    this.fishservice.createFish(this.fish).subscribe((data) => console.log(data), (err) => console.log(err),
      ()=> this.router.navigate(['/list']));
  }
}
}
