import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name:string = "";
  email:string = "";
  password:string = "";
  paidfees:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  signup() {
    console.log("Sign Up button pressed !!!");
  }

}
