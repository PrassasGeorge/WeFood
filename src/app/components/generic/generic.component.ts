import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initiation();
  }


  title = 'WeFood';
  init: any;
  loggedIn:any;

  initiation(){
    this.init = localStorage.getItem('auth')||'{}';
    if(this.init != '{}'){
      this.loggedIn = this.init;
    }
    else {
      this.loggedIn= null;
    }
  }
}
