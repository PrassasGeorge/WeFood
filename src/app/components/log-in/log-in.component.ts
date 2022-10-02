import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../services/account.service";
import {LoginModel} from "../models/LoginModel";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginModel:LoginModel=new LoginModel();

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }


  userLogin(){
    console.log(this.loginModel);
    this.accountService.loginUser(this.loginModel).subscribe(
      {
        next: (response: any) => {
          this.loginModel = response;
          localStorage.setItem('auth', JSON.stringify(this.loginModel));
        },
        error: (error: any) => console.log(error),
        complete: () => console.log("Usern Authenticated")
      })

        }
}
