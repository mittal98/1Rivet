import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InternsService } from '../interns.service';

@Component({
  selector: 'app-interns-details',
  templateUrl: './interns-details.component.html',
  styleUrls: ['./interns-details.component.scss']
})
export class InternsDetailsComponent implements OnInit {
  public interns: any;
  public id: any;
  constructor(private activatedroute: ActivatedRoute,
    public internsService: InternsService) {
    this.activatedroute.params.subscribe((param) => {
      this.id = param['id']
    });
  }
  ngOnInit(): void {
    this.getdetailsbyId()
  } 
  getdetailsbyId() {
    this.internsService.getInternsById(this.id).subscribe((data) => {
      this.interns = data
    })
  }

}
