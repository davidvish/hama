import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  isSignedIn = false 

  constructor (public loginservice : LoginService){}

  ngOnInit(){

    if(localStorage.getItem('user')!== null)
    
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

 async onSignup(email:string, password:string){
   await this.loginservice.signup(email,password)
   if(this.loginservice.isLoggedIn)
   this.isSignedIn = true

 }

 async onSignin(email:string,password:string){
  await this.loginservice.signup(email,password)
  if(this.loginservice.isLoggedIn)
  this.isSignedIn = true



}

handlelogout(){
  this.isSignedIn = false
 
}
}
// export class LoginComponent implements OnInit {

//   loginMode:boolean =true;

//   Form:FormGroup

//   constructor(private fb:FormBuilder) { }

//   ngOnInit(): void {

//     this.Form = this.fb.group({

//       email: ['',[Validators.required, Validators.email]],
//       password: ['',[Validators.required, Validators.minLength(10)]]
//     })
//   }

//   onModeSwitch(){

//     this.loginMode = !this.loginMode;
//   }
//   onSubmit(){
//     console.log(this.Form.value)
//   }


