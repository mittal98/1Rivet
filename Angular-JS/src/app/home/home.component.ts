import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public subject = new AsyncSubject();
  public observer1:any;
  public observer2:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.observer1 = this.subject.subscribe({
      next:(msg)=>{
        console.log("1stNext "+msg);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("Completed")
      }
    })
    this.subject.next(1)
    this.subject.next(2)
    this.subject.complete()
    this.subject.next(3)
    
    this.observer2 = this.subject.subscribe({
      next:(msg)=>{
        console.log("2ndNext  "+msg);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("Completed")
      }
    })
    this.subject.next(4);
  }
}
