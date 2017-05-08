import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  date: {year: number, month: number};
  constructor(private fishservice: FishService, private router:Router) {
    this.fish = new Fish();
  }

  ngOnInit() {
  }
save(saveOrCancel: boolean)
{
  if(saveOrCancel)
  {
    console.log('saving fish');
    this.fishservice.createFish(this.fish).subscribe((data) => console.log(data), (err) => console.log(err),
      ()=> this.router.navigate(['/list']));
  }


}
}
