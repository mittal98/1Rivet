import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-from',
  templateUrl: './customer-from.component.html',
  styleUrls: ['./customer-from.component.scss']
})
export class CustomerFromComponent implements OnInit {
public title:any;
public customerid:any;
  constructor(
    private activateroute:ActivatedRoute
  ) 
  {
    
    this.customerid = activateroute.snapshot.params['customerid']
    console.log(this.customerid,'id routtte');
    
   }

  ngOnInit(): void {
    this.title=this.customerid ? 'Edit customer':'Add customer';
    console.log(this.customerid)
  }

}
