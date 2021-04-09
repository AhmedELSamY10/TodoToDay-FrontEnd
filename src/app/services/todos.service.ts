import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormGroupName } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private myClient:HttpClient){ }

  private addTodos:string = `${environment.api}/api/todos/addTodo`;
  private addGroups:string = `${environment.api}/api/groups/addGroup`;
  private updateTodos:string = `${environment.api}/api/todos/updateTodo`;
  private deleteTodos:string = `${environment.api}/api/todos/deleteTodo`;
  private get:string = `${environment.api}/api/todos`;
  private getgroups:string = `${environment.api}/api/groups/getGroups`;

  todos
  groups
  err
  
  getindex(id){
    const index = this.todos.findIndex(function (wizard) {
     return wizard._id === id;
   });
   return index
  }

  addGroup(newGroup)
  {
    let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("t"))
    return this.myClient.post(this.addGroups,newGroup,{headers:headers})
  }

  addTodo(newTodo)
  {
    let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("t"))
    return this.myClient.post(this.addTodos,newTodo,{headers:headers})
  }

  updateTodo(id,updatedTodo)
  {
    const upd =this.todos.findIndex(function (wizard) {
      return wizard._id === id;
    });
    let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("t"))
    return this.myClient.patch(`${this.updateTodos}/${upd}`,updatedTodo,{headers:headers})
  } 
   deleteTodo(id)
  {
     const del =this.todos.findIndex(function (wizard) {
      return wizard._id === id;
    });

    let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("t"))
    return this.myClient.delete(`${this.deleteTodos}/${del}`,{headers:headers})
  }

  fetchall()
  {
   let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("t"))
    return this.myClient.get(this.get,{headers:headers})
  }
  fetchd(d)
  {
   let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("t"))
    return this.myClient.get(this.get,{
      headers:headers,
        params:{
          day:d
        }
      })  
  }
  fetchm(m)
  {
   let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("t"))
    return this.myClient.get(this.get,{
      headers:headers,
        params:{
          month:m
        }
      })
  }
  fetchdm(m,d)
  {
   let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("t"))
    return this.myClient.get(this.get,{
      headers:headers,
        params:{
          month:m,
          day:d
        }
      })
  }
  fetchg(g)
  {
   let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("t"))
    return this.myClient.get(this.get,{
      headers:headers,
        params:{
          groupname:g
        }
      })
  }


  fetchgg()
  {
   let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("t"))
    return this.myClient.get(this.getgroups,{headers:headers})
  }

  

}
