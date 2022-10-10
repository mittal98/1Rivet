import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { interns } from './interns.model';
@Injectable()
export class InternsService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/"
  }
  //get method
  getInterns(): Observable<any> {
    const url: string = this.baseUrl + 'internsData';
    return this.http.get(url);
  }
  //post method
  addInterns(internsdata: interns): Observable<any> {
    const url: string = this.baseUrl + 'internsData';
    return this.http.post(url, internsdata)
  }
  deleteIntern(id: number): Observable<any> {
    const url: string = this.baseUrl + 'internsData/' + id;
    return this.http.delete(url)
  }
  
  getInternsById(id: number): Observable<any> {
    const url: string = this.baseUrl + 'internsData/' + id;
    return this.http.get(url)
  }

  //update method(edit data)
  updateInterns(intern: interns, id: number): Observable<any> {
    const url: string = this.baseUrl + 'internsData/' + id;
    return this.http.put(url, intern)
  }
}
