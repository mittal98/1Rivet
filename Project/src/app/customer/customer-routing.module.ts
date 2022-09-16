import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFromComponent } from './customer-from/customer-from.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  { 
    path: '', 
    component: CustomerComponent,
    children:[
      {
        path:'customer-list',
        component:CustomerListComponent
      },
      {
        path:'customer-form',
        component:CustomerFromComponent
      }
    ] 
  },
  {
    path:'edit/:customerid',
    component:CustomerFromComponent
  },
 {
  path:'add',component:CustomerFromComponent
 },
  {
    path:':customerid',
    component:CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
