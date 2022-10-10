import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternsFormComponent } from './interns-form/interns-form.component';
import { InternsComponent } from './interns.component';

const routes: Routes = [
  {
    path: '', component: InternsComponent,
    children: [
      {
        path: '',
        component: InternsFormComponent
      },
      {
        path: 'intern-form',
        component: InternsFormComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternsRoutingModule { }
