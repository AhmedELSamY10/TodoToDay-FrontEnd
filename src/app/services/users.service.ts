import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClient:HttpClient,private authService: AuthService) { }

  private regURL:string = `${environment.api}/api/users/reg`;
  private logURL:string = `${environment.api}/api/users/login`;


  regUser(newUser)
  {
    return this.myClient.post(this.regURL,newUser)
  }

  logUser(newUser)
  { 
    return  this.myClient.post(this.logURL,newUser)
  }
}
