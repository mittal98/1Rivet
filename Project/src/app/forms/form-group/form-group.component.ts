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

  public isSubmitted:boolean=false;
  constructor() 
  { 
     this.userForm = new FormGroup('');
     this.pb = new FormBuilder;
  }

  ngOnInit(): void {
    this.userForm = this.pb.group({
      firstname : ['',[Validators.required,Validators.minLength(3)]],
      lastname : ['',Validators.required],
      email : ['',[Validators.required]],
      address : ['',[Validators.required]],
      term: ['',[Validators.required]]
    })
  }

  onSubmit(){
    this.isSubmitted=true
    console.log(this.userForm)
  }
}
