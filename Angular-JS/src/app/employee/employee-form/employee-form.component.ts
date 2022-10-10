import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/employee.model';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm: FormGroup;
  public formbuilder: FormBuilder;
  public isSubmitted: boolean = false;
  public data: User[];
  userid: string;

  constructor(private employeeService: EmployeeService,
    private activatedRouter: ActivatedRoute) {
    this.formbuilder = new FormBuilder;
    this.userid = ''
    this.data = []

    this.employeeForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      dob: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
    })
    this.isSubmitted = false;
    // data get by id
    this.activatedRouter.params.subscribe((res: any) => {
      this.userid = res.id;
      if (this.userid) {
        this.getUserById()
      }
    })
  }
  ngOnInit(): void {
    this.getUserdata();
  }
  // save data
  public onSave(): void {
    this.isSubmitted = true;
    if (this.employeeForm.valid) {
      if (this.userid) {
        this.employeeService.updateUser(this.employeeForm.value, Number(this.userid)).subscribe(() => {
          this.getUserdata();
        })
      }
      else {
        this.employeeService.addUser(this.employeeForm.value).subscribe(() => {
          this.getUserdata();
        })
      }
    }
  }
  // reset Data
  onReset() {
    this.employeeForm.reset();
  }
  public getUserdata(): void {
    this.employeeService.getUser().subscribe((result: User[]) => {
      this.data = result;
    });
  }
  getUserById() {
    this.employeeService.getUserById(Number(this.userid)).subscribe((Response: User) => {
      this.employeeForm.patchValue(Response)
    })
  }
  // edit data
  onEdit(item: any) {
    this.employeeForm.patchValue(item)
  }
}

