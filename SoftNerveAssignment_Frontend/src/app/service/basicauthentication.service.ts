import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicauthenticationService {

  constructor(private http:HttpClient) { }
  executeJWTAuthenticationService(username:string, password:string) {
    
    return this.http.post<any>(
      `http://localhost:8080/authenticate`,{
        username,
        password
      }).pipe(
        map(
          (data:any) => {
            sessionStorage.setItem(AUTHENTICATED_USER,username);
            sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
            return data;
          }
        )
      );
  }
   getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
      //if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}
export class AuthenticationBean{
  constructor(public message:string) { }
}
