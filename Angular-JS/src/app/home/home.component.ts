import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    let buyLeptop=new Promise((resolve,reject)=>{
      resolve('promise is resolved')
    });
    buyLeptop.then(res=>{
      console.log('success')
    })
  }

  ngAfterViewInit(): void {

  }
}