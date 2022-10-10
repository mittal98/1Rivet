import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interns } from '../interns.model';
import { InternsService } from '../interns.service';


@Component({
  selector: 'app-interns-form',
  templateUrl: './interns-form.component.html',
  styleUrls: ['./interns-form.component.scss']
})
export class InternsFormComponent implements OnInit {
  public InternsForm: FormGroup;
  public isSubmitted: boolean;
  public data: interns[];


  constructor(public formBuilder: FormBuilder,
    private internsService: InternsService
  ) {
    this.InternsForm = this.formBuilder.group({
      id: [],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      department: ['', [Validators.required, Validators.minLength(3)]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      city: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
    });
    this.isSubmitted = false;
    this.data = []
  }

  ngOnInit(): void {
    this.getUserdata();
  }
  get formValidation(): { [key: string]: AbstractControl } {
    return this.InternsForm.controls;
  }
  public getUserdata(): void {
    this.internsService.getInterns().subscribe((result: interns[]) => {
      this.data = result;
    });
  }
  public onSave(): void {
    this.isSubmitted = true;
    if (this.InternsForm.valid) {
      this.internsService.addInterns(this.InternsForm.value).subscribe(() => {
        this.getUserdata();
      })
    }
  }
  onReset() {
    this.InternsForm.reset();
  }
}
