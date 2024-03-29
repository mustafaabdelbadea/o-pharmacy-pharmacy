import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from "../services/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  isClicked:boolean=false;
  responseMessage:any;
  isInvalidData:boolean=false;

  //form group check data and validation
  signinForm = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
  });
  //call the api from service 
  signIn() {
    this.isClicked=true;
    this.isInvalidData=false;
    this._AuthService.login(this.signinForm.value).subscribe(data => {
      //check if res = success, logged in 
      if (data.message == 'success') {
        this.isClicked=false;
        localStorage.setItem('token', data.token);
        if(data.logo!=null||data.logo!=undefined){
          localStorage.setItem('logo', data.logo);
        }
     
        //console.log('test',data.photo)
         window.location.reload();
      }
      else if(data.message=='email not Verified'){
        this.isClicked=false;

        localStorage.setItem('token', data.token);
        window.location.reload();

      }
      else {
        this.isClicked=false;
        //invalid email or password
        this.responseMessage=data.message;
        this.isInvalidData=true;
        console.log(data.message)
      }
    },
      err => {
        console.log(err);
      });
  }
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  

  ngOnInit(): void {
  }
}
