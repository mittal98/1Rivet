import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employeeData:any;


  @Input() public details : any;


  constructor(private employeeService:EmployeeService,
    public route :Router,
   
   ) {
    this.details = [];
   
  
   }

  ngOnInit(): void {
   this.getUserData();
  }

  
public getUserData(){
  this.employeeService.getUser().subscribe((result:any)=>{
this.details = result
  })
}
  //service for delete data
  onDelete(data: any){
    this.employeeService.deleteUser(data).subscribe((result)=>{
    
      this.getUserData();
     
    })
  } 

  onDetails(item : any){
    this.route.navigate(['employee/details'],{queryParams : item})
  }

  //service for update data
  onEdit(itemID :number) : void{
   this.route.navigate(['form/edit/' + itemID])
    
  }

}
