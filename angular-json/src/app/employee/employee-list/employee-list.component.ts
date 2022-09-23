import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeelist: any = [];
  @Input() userdata:any


  @Output() public edit: EventEmitter<any>;
  constructor(private router: Router) {
    this.employeelist = [];
    this.edit = new EventEmitter();
  }

  ngOnInit(): void {
  }
 //Edit record
 public editEmployee(item: any): void {
  this.edit.emit(item)
}


//Delete the record
public delet(item: any): void {
  this.userdata.splice(item, 1);
}

//Details record
public details(item: any): void {
  this.router.navigate(['employee/employee-details'], { queryParams: item });
}
}
