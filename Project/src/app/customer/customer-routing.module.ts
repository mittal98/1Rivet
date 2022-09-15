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
        path:'cust-list',
        component:CustomerListComponent
      },
      {
        path:'cust-form',
        component:CustomerFromComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
