import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.scss']
})
export class BehaviourSubjectComponent implements OnInit {
  public behavior = new BehaviorSubject(1);
  public behavior1: any
  public behavior2: any
  constructor() { }

  ngOnInit(): void {
    console.log("Behavior subject")
    this.behavior1 = this.behavior.subscribe({
      next: (v) => {
        console.log(`data A : ${v}`);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.behavior.next(1)
    this.behavior.next(2)
    // this.subject.complete()

    this.behavior2 = this.behavior.subscribe({
      next: (v) => {
        console.log(`data B :${v} `);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.behavior.next(3)
    this.behavior.next(4)

  }
  }


