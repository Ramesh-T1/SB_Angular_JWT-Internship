import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasicauthenticationService } from '../service/basicauthentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string='';
  password:string='';
  message:string='';
  invalidLogin=false;
  constructor(private router:Router,private basicAuthenticationService:BasicauthenticationService){}
  authernticateUser(un:String,pwd:String){
    if(un=="ramesh" && pwd=="dummy")
    {
      console.log("Successfully logged In");
      this.message=`Successfully logged In with user ${this.username}`
      this.router.navigate(['listof-all-students'])
    }
    else{
      this.message="Invalid Credentials.Please Enter Right Credentials"
    }
  }
  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          (data:any) => {
            console.log(data)
            this.router.navigate(['listof-all-students'])
            this.invalidLogin = false      
          },
          (error:any) => {
            console.log(error)
            this.invalidLogin = true
          }
        )
}
}
