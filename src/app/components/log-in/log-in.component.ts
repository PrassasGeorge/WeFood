import { RegisterModel } from './../models/RegisterModel';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { LoginModel } from '../models/LoginModel';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  loginModel: LoginModel = new LoginModel();
  registerModel:RegisterModel = new RegisterModel();

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  userLogin() {
    console.log(this.loginModel);
    this.accountService.loginUser(this.loginModel).subscribe({
      next: (response: any) => {
        this.loginModel = response;
        localStorage.setItem('auth', JSON.stringify(this.loginModel));
      },
      error: (error: any) => console.log(error),
      complete: () => console.log('Usern Authenticated'),
    });
  }

  userRegister(){
    console.log(this.registerModel);
    this.accountService.registerUser(this.registerModel).subscribe(
      {
        next: (response: any) => this.registerModel = response,
        error: (error: any) => console.log(error),
        complete: () => console.log("registered user")
      }
    )
  }

}
