import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor() {}
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
