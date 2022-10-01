import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../services/account.service";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private authService:AccountService) { }

  ngOnInit(): void {
  }

  auth:any;
  username: any;
  password: any;


  login(username: string, password: string){
    this.authService.login(username, password).subscribe(
      {
        next: (response: any) => {
          this.auth=response;
          localStorage.setItem('auth', JSON.stringify(this.auth));
        },
        error: (error: any) => console.log(error),
        complete: () => console.log("Usern Authenticated")

      }
    )
  }

  logout(){
    this.auth.logout();
  }
}
