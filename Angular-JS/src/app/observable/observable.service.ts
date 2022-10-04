import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }
    display(data:any, listId:any)
    {
      const li = document.createElement('li');
      li.innerText = data;
      document.getElementById(listId)?.appendChild(li);
    } 
  
}
