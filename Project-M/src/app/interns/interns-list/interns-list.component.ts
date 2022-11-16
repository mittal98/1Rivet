import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternsService } from '../interns.service';

@Component({
  selector: 'app-interns-list',
  templateUrl: './interns-list.component.html',
  styleUrls: ['./interns-list.component.scss']
})
export class InternsListComponent implements OnInit {
  @Input() public details: any;

  constructor(private internsService: InternsService,
    public route: Router)
     {
    this.details = [];
  }

  ngOnInit(): void {
    this.getInternsData();
  }
  public getInternsData() {
    this.internsService.getInterns().subscribe((result) => {
      this.details = result;
      console.log(this.details)
    })
  }
  onDelete(id: any) {
    this.internsService.deleteIntern(id).subscribe((result) => {
      this.getInternsData();
    })
  }
   // details 
   onDetails(interns: any) {
    this.route.navigate(['interns/details', interns.id])
  }
  //service for update data
  onEdit(itemID: number): void {
    this.route.navigate(['interns/edit/' + itemID])
  }
}
