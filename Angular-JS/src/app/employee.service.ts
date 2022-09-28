import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './employee.model';


@Injectable()
export class EmployeeService {
  public baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";
  }
  //get method
  getUser(): Observable<any> {
    const url = this.baseUrl + "employee";
    return this.http.get(url);
  }
  //post method
  addUser(userdata:User):Observable<any>{
    const url : string = this.baseUrl +  'employee';
    return this.http.post(url,userdata)
   }

   //delete method
   deleteUser(id:number):Observable<any>{
    const url : string = this.baseUrl +  'employee/'+id;
    return this.http.delete(url)
   }

   getUserById(id:number):Observable<any>{
    const url : string = this.baseUrl + 'employee/'+ id;
    return this.http.get(url)
   }

   //update method(edit data)
   updateUser(user:User,id:number):Observable<any>{
    const url : string = this.baseUrl +  'employee/'+ id;
    return this.http.put(url,user)
   }
  
}
