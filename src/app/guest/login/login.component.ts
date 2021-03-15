import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UsersService} from 'src/app/services/users.service'
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myService:UsersService, private router: Router ,private authService: AuthService) {}

  ngOnInit(): void {
  }

  err
  myForm = new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  private t:any;
  login(){
    if(this.myForm.valid){
    let sub =  this.myService.logUser(this.myForm.value)
    .subscribe(async(response)=>{
      console.log(response);
   this.t =  response;
   console.log(this.t.token);
    localStorage.clear();
  localStorage.setItem("t",this.t.token);
  //this.authService.login(localStorage.getItem("t"))
   if(this.t.token){   
        this.router.navigate(['user']);
     }
    else{
     this.router.navigate(['/login'])
    } 
   }
    ,
    (err)=>{
      this.err="Wrong UserName Or PassWord"
   })}}

  
   gotoreg(){
    this.router.navigate(['reg']);
  }
  
}
