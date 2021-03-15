import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {TodosService} from 'src/app/services/todos.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  constructor(public myService:TodosService ,private myActivatedRoute:ActivatedRoute ,private modalService: NgbModal,private router: Router) { }

  ngOnInit(): void {
  }

  title = 'appBootstrap';
  closeResult: string;
  open(content) { 
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(content)
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
 
  i
  
  myForm = new FormGroup({
    title:new FormControl(``,[Validators.required,Validators.minLength(3),Validators.maxLength(100)]),
    body:new FormControl(``,[Validators.required,Validators.minLength(10),Validators.maxLength(500)]),
    status:new FormControl(``,[Validators.required]),
    group:new FormControl(``,[Validators.required])
  })

  sub
  
  
 updateT(id){
  console.log(id)
  console.log(this.myForm.value)
 if(this.myForm.valid){
 let sub =  this.myService.updateTodo(id,this.myForm.value) 
 .subscribe((response)=>{
console.log(response)
window.location.reload(); 

 },
 (err)=>{
console.log(err)
 })} }

deleteT(id){
  console.log(id)
 let sub =  this.myService.deleteTodo(id)
 .subscribe((response)=>{
console.log(response)
window.location.reload(); 
},
 (err)=>{
console.log(err)
 })} 

 
 getindex(id){
  const index = this.myService.todos.findIndex(function (wizard) {
   return wizard._id === id;
 });
 this.i=index
}

setDefault() {
  let todoDetail = {
    title:this.myService.todos[this.i].title,
    body: this.myService.todos[this.i].body,
    status:this.myService.todos[this.i].status,
    group: this.myService.todos[this.i].group

  };
  this.myForm.patchValue(todoDetail)
}

}
