import { Component, OnInit } from '@angular/core';
import {LoginService} from "../Services/login.service";

@Component({
  selector: 'app-toptoolbar',
  templateUrl: './toptoolbar.component.html',
  styleUrls: ['./toptoolbar.component.css']
})
export class ToptoolbarComponent implements OnInit {


  isloggedin: boolean;
  constructor() { }

  ngOnInit() {

  }


  clearSession()
  {
      sessionStorage.clear();
      console.log('session clear: userId= ' + sessionStorage.getItem('userId'));
  }


}
