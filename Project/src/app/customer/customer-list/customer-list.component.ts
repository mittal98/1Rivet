import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customer:any=[];
  constructor() {
    this.customer=[
      {
        id:1,
        email:'mittal@gmail.com',
        birthdate:'09/8'
      },
      {
        id:2,
        email:'kiran@gmail.com',
        birthdate:'19/8'
      },
      {
        id:3,
       email:'bhargav@gmail.com',
        birthdate:'29/8'
      },
      {
        id:4,
        email:'jinal@gmail.com',
        birthdate:'10/8'
      },
    ]
   }

  ngOnInit(): void {
  }

}
