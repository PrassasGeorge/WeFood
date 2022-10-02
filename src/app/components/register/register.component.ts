import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../services/account.service";
import {RegisterModel} from "../models/RegisterModel";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerModel:RegisterModel=new RegisterModel();

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {

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
