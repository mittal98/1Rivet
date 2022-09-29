import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  public subject = new Subject();
  public observer1: any
  public observer2: any

  constructor() { }

  ngOnInit(): void {
    //subject
    this.observer1 = this.subject.subscribe({
      next: (v) => {
        console.log(`data A : ${v}`);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.subject.next(1)
    this.subject.next(2)

    this.observer2 = this.subject.subscribe({
      next: (v) => {
        console.log(`data B :${v} `);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.subject.next(4)
    this.subject.next(5)


  }

  }


