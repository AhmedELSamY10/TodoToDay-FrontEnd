import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {TodosService} from 'src/app/services/todos.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {

  constructor(private myService:TodosService ,private myActivatedRoute:ActivatedRoute ,private modalService: NgbModal,private router: Router) { }

  ngOnInit(): void {
    this.fetchgroups();

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
 
  myForm = new FormGroup({
    title:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(100)]),
    body:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(500)]),
    status:new FormControl('',[Validators.required]),
    group:new FormControl('',[Validators.required])
  })

  myForm2 = new FormGroup({
    gname:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(100)]),

  })


  ADDToDo(){
    console.log(this.myForm.value)
   if(this.myForm.valid){
   let sub =  this.myService.addTodo(this.myForm.value)
   .subscribe((response)=>{
console.log(response)
window.location.reload(); 

   },
   (err)=>{
console.log(err)
   })
 } }

 ADDGroup(){
    console.log(this.myForm2.value)
   if(this.myForm2.valid){
   let sub =  this.myService.addGroup(this.myForm2.value)
   .subscribe((response)=>{
console.log(response)
this.fetchgroups();
   },
   (err)=>{
console.log(err)
   })
 } }
 
 fetchgroups(){
 let sub =  this.myService.fetchgg()
 .subscribe((response)=>{
console.log(response)
this.myService.groups =response
 },
 (err)=>{
console.log(err)
 })
}



logout(){
  localStorage.clear()
  this.router.navigate(['/login'])
}

}








