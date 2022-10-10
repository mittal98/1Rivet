import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employeeData: any;
  @Input() public details: any;
  constructor(private employeeService: EmployeeService,
    public route: Router,
  ) {
    this.details = [];
  }
  ngOnInit(): void {
    this.getUserData();
  }
  // get data 
  public getUserData() {
    this.employeeService.getUser().subscribe((result) => {
      this.details = result;
      console.log(this.details)
    })
  }
  //service for delete data
  onDelete(id: any) {
    this.employeeService.deleteUser(id).subscribe((result) => {
      this.getUserData();
    })
  }
  // details 
  onDetails(emp: any) {
    this.route.navigate(['employee/details', emp.id])
  }
  //service for update data
  onEdit(itemID: number): void {
    this.route.navigate(['employee/edit/' + itemID])
  }

}
