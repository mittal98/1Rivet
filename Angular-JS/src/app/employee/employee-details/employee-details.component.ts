import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  public employee: any;
  constructor( private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employee = this.activatedroute.snapshot.queryParams;
  }
}
