import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/crud.model';
import { UserServiceService } from 'src/app/shared/user-service.service'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm: FormGroup;
  public formbuilder: FormBuilder;
  public isSubmitted: boolean = false;
  public userdata: any = [];
  public data: User[];

  constructor(private userservice: UserServiceService) {
    this.employeeForm = new FormGroup('');
    this.formbuilder = new FormBuilder;

    this.data = []
  }

  ngOnInit(): void {
    this.employeeForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      dob: ['', [Validators.required,]],
      salary: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    })

    this.getUserdata()

  } public saveEmployee(): void {
    this.isSubmitted = true;
    if (this.employeeForm.valid) {
      this.userdata.push({
        name: this.employeeForm.controls['name'].value,
        gender: this.employeeForm.controls['gender'].value,
        dob: this.employeeForm.controls['dob'].value,
        salary: this.employeeForm.controls['salary'].value
      });
      this.isSubmitted = false;
      this.employeeForm.reset();
    }
  }

  public editEmployee(item: any): void {
    this.employeeForm.patchValue(item)
  }

  public resetForm(): void {
    this.employeeForm.reset();
  }
  public getUserdata(): void {
    this.userservice.getUser().subscribe((result) => {
      this.data = result;
      console.log(this.data)
    });
  }
}
