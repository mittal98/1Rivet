import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeelist: any = [];
 @Input() userdata:any
  constructor() {
    this.employeelist = [];
  }

  ngOnInit(): void {
  }

}
