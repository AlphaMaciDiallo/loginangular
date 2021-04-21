import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // formGroup:FormGroup;
  username:string = "";
  password:string = "";

  constructor(){}//private authService:AuthServiceService) { }

  ngOnInit(): void {
    // this.initForm();
  }

  // Video Beg
  // initForm() {
  //   this.formGroup = new FormGroup({
  //     username: new FormControl('', [Validators.required]),
  //     password: new FormControl('', [Validators.required])
  //   })
  // }
  // login() {
  //   if(this.formGroup.valid){
  //     this.authService.login(this.formGroup.value).subscribe(result => {
  //       if(result.success){
  //         console.log(result);
  //         alert(result.message);
  //       }else{
  //         console.log(result.message);
  //       }
  //     })
  //   }
  // }
  // Video End

  errormessage:string = "";

  login (username:string, password:string) {
    console.log(username);
    if(username == "admin" && password == "admin"){
      console.log("Connected Successfully !!!");
      this.clear();
      
    }else{
      console.log("Wrong Login");
      this.errormessage = "Wrong Login";
      this.clear();
    }
  }

  clear() {
    this.username ="";
    this.password ="";
  }

}
