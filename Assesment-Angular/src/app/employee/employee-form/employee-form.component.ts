import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm: FormGroup;
  public  formbuilder : FormBuilder;
  public isSubmitted:boolean=false;
  public userdata:any[]=[];
  public employeeData:any

  
  constructor() {
    this.employeeForm = new FormGroup('');
    this.formbuilder = new FormBuilder ;
    this.employeeData={
      name:'John Smith'
     }
    
   }

  ngOnInit(): void {
    this.employeeForm = this.formbuilder.group({
      name : ['',[Validators.required,Validators.minLength(3)]],
      gender: ['',Validators.required,Validators.pattern(/^[A-Za-z]+$/)],
      dob : ['',[Validators.required,]],
      salary : ['',[Validators.required,Validators.pattern(/^[0-9]+$/)]],
    }),
    this.employeeData.patchValue(this.employeeForm);
  }
  add(){
    this.isSubmitted=true
    console.log(this.employeeForm.value)
    this.userdata.push(this.employeeForm.value)
  }
  reset(){
    this.employeeForm.reset()
  }
}
