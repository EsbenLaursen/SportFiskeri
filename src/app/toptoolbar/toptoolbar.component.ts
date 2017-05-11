import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toptoolbar',
  templateUrl: './toptoolbar.component.html',
  styleUrls: ['./toptoolbar.component.css']
})
export class ToptoolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  clearSession()
  {
      sessionStorage.clear();
      console.log('session clear: userId= ' + sessionStorage.getItem('userId'));
  }
}
