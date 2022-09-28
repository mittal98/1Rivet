import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  public employee: any;
  public id: any;
  // get data from param
  constructor(private activatedroute: ActivatedRoute,
    public employeeService: EmployeeService) {
    this.activatedroute.params.subscribe((param) => {
      this.id = param['id']
    });
  }
  // call function
  ngOnInit(): void {
    this.getdetailsbyId()
  }
  getdetailsbyId() {
    this.employeeService.getUserById(this.id).subscribe((data) => {
      this.employee = data
    })
  }
}
