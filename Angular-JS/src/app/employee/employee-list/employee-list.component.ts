import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employeeData:any;
  public empDetails : any 


  @Input() public details : any;
  @Output() public listData : EventEmitter<any>


  constructor(private employeeService:EmployeeService,
    public route :Router,
    private activatedRouter : ActivatedRoute,
   ) {
    this.listData =  new EventEmitter;
    this.details = [];
    this.empDetails =  this.activatedRouter.snapshot.params['empdetails'] ;
   
  
   }

  ngOnInit(): void {
   this.getUserData();
  }

  
public getUserData(){
  this.employeeService.getUser().subscribe((result)=>{
  this.details = result;
  console.log(this.details)
  })
}
  //service for delete data
  onDelete(id: any){
    this.employeeService.deleteUser(id).subscribe((result)=>{
  
      this.getUserData();
     
    })
  } 

  onDetails(item : any){
    this.route.navigate(['employee/details'],{queryParams : item})
  }

  //service for update data
  onEdit(itemID :number) : void{
   this.route.navigate(['employee/edit/' + itemID])
    
  }

}
