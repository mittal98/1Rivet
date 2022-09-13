import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increase-decrease',
  templateUrl: './increase-decrease.component.html',
  styleUrls: ['./increase-decrease.component.scss']
})
export class IncreaseDecreaseComponent implements OnInit {

  public session: string;
  public sizeNumber: number = 50;
  constructor() {
    this.session = 'Angular';
    this.sizeNumber = 50;
  }

  public changeSize(operationType: string): void{
    if (operationType == 'descrese') {
      this.sizeNumber = this.sizeNumber - 10;
    }
    else {
      this.sizeNumber = this.sizeNumber + 10;
    }
  }
  ngOnInit(): void {
  }

}
