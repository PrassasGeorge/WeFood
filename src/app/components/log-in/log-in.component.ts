import { RegisterModel } from './../models/RegisterModel';
import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../services/account.service";
import {LoginModel} from "../models/LoginModel";
import{StorageService} from "../../../services/storage.service"


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  loginModel: LoginModel = new LoginModel();
  registerModel:RegisterModel = new RegisterModel();
  auth:any;
  container: any;
  signInButton: any;
  signUpButton: any;



  constructor(private accountService: AccountService,private tokenStorage:StorageService) {}

  ngOnInit(): void { }


  reload(){
    window.location.reload();
  }
  userLogin(){
    console.log(this.loginModel);
    this.accountService.loginUser(this.loginModel).subscribe(
      {
        next: (response: any) => {
          this.auth = response;
          this.tokenStorage.saveUser(response);
          localStorage.setItem('auth', JSON.stringify(this.auth));
        },
        error: (error: any) => console.log(error),
        complete: () => console.log("logged user")
      }
    )
  }

  userRegister(){
    console.log(this.registerModel);
    this.accountService.registerUser(this.registerModel).subscribe(
      {
        next: (response: any) => {
          this.auth = response
          this.tokenStorage.saveUser(response);
          localStorage.setItem('auth', JSON.stringify(this.auth));
        },
        error: (error: any) => console.log(error),
        complete: () => console.log("registered user")
      }
    )
  }
 upClick(){
   this.container = document.getElementById('container');
   this.signUpButton = document.getElementById('signUp');
   this.signUpButton.addEventListener('click', () => {
     this.container.classList.add("right-panel-active");
   });

 }

inClick(){
  this.container = document.getElementById('container');
  this.signInButton = document.getElementById('signIn');
  this.signInButton.addEventListener('click', () => {
    this.container.classList.remove("right-panel-active");
  });
}





}
