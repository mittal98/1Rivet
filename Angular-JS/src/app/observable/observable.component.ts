import { Component, AfterViewInit, OnInit } from '@angular/core';
import { concat, debounceTime, filter, forkJoin, from, fromEvent, interval, map, merge, observable, Observable, of, switchMap, take, takeUntil, tap, timer } from 'rxjs';
import { ObservableService } from './observable.service';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor(public service: ObservableService) {

  }

  ngOnInit(): void {
    const observable$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next("hi");
      }, 1000),
        setTimeout(() => {
          observer.next("mittal");
        }, 2000)

    })
    observable$.subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }

  //RxJS Operators
  ngAfterViewInit(): void {
    //of operator
    of(1, 2, 3)
      .pipe(map((x) => x * x))
      .subscribe((v) => this.service.display(v, 'list'))

    //fromEvent operator
    const btn = document.getElementsByTagName("button");
    fromEvent(btn, 'click').subscribe((x) => {
      console.log(x);
    });


    //interval operator
    let test = interval(1000);
    let case1 = test.pipe(take(10));
    case1.subscribe(x => console.log(x));

    //from opeartor
    from([1, 2, 3, 4, 5]).subscribe((x) => this.service.display(x, 'list'));

    //concat opeartor
    console.log("concat");

    concat(
      of(1, 2, 3),
      of(4, 5, 6),
      case1
    ).subscribe(x => console.log(x));

    //merge operator


    console.log("merge");
    merge(
      of(1, 2, 3),
      of(2, 4, 5, 6),
    ).subscribe(x => console.log(x));

    //forkjoin operator
    console.log("forkjoin");
    forkJoin(
      of(1, 2, 3),
      of(2, 4, 5, 6),
    ).subscribe(x => console.log(x));

    //takeUntil operator
    const source = interval(1000);
    const time = timer(5000);
    source.pipe(takeUntil(time)).subscribe(
      (x) => console.log(x)
    );

    //filter operator
    console.log("filter");
    of(2, 3, 4, 5, 6, 7, 8).pipe(filter((x) => x % 2 == 0)).subscribe((x) => console.log(x));

    //debounceTime operator
    let searchBox = document.getElementsByTagName('input');
    const keyup = fromEvent(searchBox, 'keyup');
    keyup
      .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(50000)
      )
      .subscribe(console.log);

    //tap operator ???
    const s = of(1, 2, 3, 4, 5)
      .pipe(
        tap(val => console.log(`BEFORE : ${val}`)),
        map(val => val + 10),
        tap(val => console.log(`AFTER : ${val}`))
      )
      .subscribe(val => console.log(val));


























    //map operator
    console.log("map");
    let m = from([4, 6, 7, 8, 9]);
    m.pipe(map((val) => val * 3)).subscribe((x) => {
      console.log(x);
    })

    //switchMap
    fromEvent(document, 'click')
      .pipe(
      // switchMap(() => interval(1000))
    )
      .subscribe((x) => console.log(x));
  }

}