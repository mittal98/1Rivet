import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  internsid: string;


  constructor(public formBuilder: FormBuilder,
    private internsService: InternsService,
    private activatedRouter: ActivatedRoute) {
    this.data = []
    this.internsid = ''


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
    
    this.activatedRouter.params.subscribe((res: any) => {
      this.internsid = res.id;
      if (this.internsid) {
        this.getInternsById()
      }
    })
  }

  ngOnInit(): void {
    this.getInternsData();
  }
  get formValidation(): { [key: string]: AbstractControl } {
    return this.InternsForm.controls;
  }


  public onSave():void {
    this.isSubmitted = true;
    if (this.InternsForm.valid) {
      if (this.internsid) {
        this.internsService.updateInterns(this.InternsForm.value, Number(this.internsid)).subscribe(() => {
          this.getInternsData();
        })
      }
      else {
        this.internsService.addInterns(this.InternsForm.value).subscribe(() => {
          this.getInternsData();
        })
      }
    }
  }
  onReset() {
    this.InternsForm.reset();
  }
  public getInternsData(): void {
    this.internsService.getInterns().subscribe((result: interns[]) => {
      this.data = result;
    });
  }
 
  getInternsById() {
    this.internsService.getInternsById(Number(this.internsid)).subscribe((Response: interns) => {
      this.InternsForm.patchValue(Response)
    })
  }
  onEdit(item: any) {
    this.InternsForm.patchValue(item)
  }
}
