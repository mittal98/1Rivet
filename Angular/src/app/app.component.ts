import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  public parentData: string[];

  constructor() {
    this.parentData = [];
  }

  ngOnInit(): void {
    this.parentData = ["mittal"];

  }
 
}
