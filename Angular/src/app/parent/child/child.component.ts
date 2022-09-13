import { Component, EventEmitter, Input, OnInit, Output, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@ViewChild('username') username!:ElementRef<HTMLInputElement>;
  @Input() childdata: string[];
name:string;
  @Output() addData: EventEmitter<string>

  constructor() {
    this.name="";
    this.childdata = [];
    console.log(this.childdata);
    this.addData = new EventEmitter();

  }

  ngOnInit(): void {
    console.log(this.childdata);
  }
  onSubmit() {
    this.addData.emit(this.name);
    this.username.nativeElement.value = "";
  }
}
