import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UsersService} from 'src/app/services/users.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private myService:UsersService,private router: Router) { }

  ngOnInit(): void {
  }

  err

  myForm = new FormGroup({
    username:new FormControl('',[Validators.required,Validators.maxLength(32)]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    email:new FormControl('',[Validators.required,Validators.email])
  })


  register(){
    console.log(this.myForm.value)
   if(this.myForm.valid){
   let sub =  this.myService.regUser(this.myForm.value)
   .subscribe((response)=>{
console.log(response)
this.router.navigate(['login'])
   },
   (err)=>{
console.log(err)
if(err.error.message.includes("username:")){
 this.err="username is already exists"
 this.router.navigate(['reg'])
}
if(err.error.message.includes("email:")){
 this.err="email is already exists"
 this.router.navigate(['reg'])
}})}}


gotologin(){
  this.router.navigate(['login']);
}


}
