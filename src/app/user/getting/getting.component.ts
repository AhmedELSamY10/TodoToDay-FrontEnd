import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {TodosService} from 'src/app/services/todos.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-getting',
  templateUrl: './getting.component.html',
  styleUrls: ['./getting.component.css']
})
export class GettingComponent implements OnInit {

  constructor(private myService:TodosService ,private myActivatedRoute:ActivatedRoute ,private modalService: NgbModal,private router: Router) { }

  ngOnInit(): void {
    this.getTodos()
    this.fetchgroups();

  }

  sub
  m
  d
  g
  

  getTodos(){
    this.sub =  this.myService.fetchall()
   .subscribe((response)=>{
 console.log(response);
 this.myService.todos = response
 this.myService.err=""
if(!this.myService.todos[0]){
 this.myService.err="you have No todos"
}
  this.sub.unsubscribe();
   },
   (err)=>{
 console.log(err)
   })
 }

  getTodosByDay(){
    console.log(this.d)
    this.sub =  this.myService.fetchd(this.d)
   .subscribe((response)=>{
 console.log(response);
 this.myService.todos = response
 this.myService.err=""
 if(!this.myService.todos[0]){
  this.myService.err="no Todos in this day"
}
  this.sub.unsubscribe();
   },
   (err)=>{
 console.log(err)
   })
 }
 
 getTodosByMonth(){
  this.sub =  this.myService.fetchm(this.m)
 .subscribe((response)=>{
console.log(response);
this.myService.todos = response
this.myService.err=""
if(!this.myService.todos[0]){
  this.myService.err="no Todos in this month"
}
this.sub.unsubscribe();
 },
 (err)=>{
console.log(err)
 })
}
getTodosByDayAndMonth(){
  console.log(this.d)
  console.log(this.m)
  this.sub =  this.myService.fetchdm(this.m,this.d)
 .subscribe((response)=>{
console.log(response);
this.myService.todos = response
this.myService.err=""
if(!this.myService.todos[0]){
  this.myService.err="no Todos in this date"
}
this.sub.unsubscribe();
 },
 (err)=>{
console.log(err)
 })
}
getTodosBygroupname(){
  this.sub =  this.myService.fetchg(this.g)
 .subscribe((response)=>{
console.log(response);
this.myService.todos = response
this.myService.err=""
if(!this.myService.todos[0]){
  this.myService.err="no Todos "
}
this.sub.unsubscribe();
 },
 (err)=>{
console.log(err)
 })
}

groups

fetchgroups(){
  let sub =  this.myService.fetchgg()
  .subscribe((response)=>{
 console.log(response)
 this.groups =response
  },
  (err)=>{
 console.log(err)
  })
 }
}
