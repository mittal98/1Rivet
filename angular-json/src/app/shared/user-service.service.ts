import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserServiceService {
  public baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";
  }
  getUser(): Observable<any> {
    const url= this.baseUrl + "employee";
    return this.http.get(url);
  }
}
