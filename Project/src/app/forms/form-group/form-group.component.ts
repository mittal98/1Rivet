import { TreeError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  public userForm: FormGroup;
  public pb : FormBuilder;
  public userdata:any

  public isSubmitted:boolean=false;
  constructor() 
  { 
     this.userForm = new FormGroup('');
     this.pb = new FormBuilder;
     this.userdata={
      firstname:'mittal',
      lastname:'patel'
     }
  }

  ngOnInit(): void {
    this.userForm = this.pb.group({
      firstname : ['',[Validators.required,Validators.minLength(3)]],
      lastname : ['',Validators.required],
      email : ['',[Validators.required]],
      address : ['',[Validators.required]],
      term: ['',[Validators.required]]
    })
    this.userForm.patchValue(this.userdata)
    
  }

  onSubmit(){
    this.isSubmitted=true
    console.log(this.userForm)
  }
  reset(){
    this.userForm.reset()
  }
}
