import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  public async = new AsyncSubject();
  public async1: any
  public async2: any
  public async3: any
  constructor() { }

  ngOnInit(): void {
    console.log("Async subject")
    this.async1 = this.async.subscribe({
      next: (v) => {
        console.log(`data A : ${v}`);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.async.next(1)
    this.async.next(2)
    this.async.complete()
    this.async.next(6)
    this.async.next(7)

    this.async2 = this.async.subscribe({
      next: (v) => {
        console.log(`data B :${v} `);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.async.next(4)
    this.async.next(5)

    this.async3 = this.async.subscribe({
      next: (v) => {
        console.log(`data c :${v}`);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })
  }
  }


