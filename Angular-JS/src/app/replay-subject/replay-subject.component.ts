import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
  public replay = new ReplaySubject(3);
  public replay1: any
  public replay2: any
  constructor() { }

  ngOnInit(): void {
    console.log("Replay subject")
    this.replay.next(6)
    this.replay1 = this.replay.subscribe({
      next: (v) => {
        console.log(`data A : ${v}`);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.replay.next(1)
    this.replay.next(2)

    this.replay1 = this.replay.subscribe({
      next: (v) => {
        console.log(`data B :${v} `);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.replay.next(4)
    this.replay.next(5)
  }

}
