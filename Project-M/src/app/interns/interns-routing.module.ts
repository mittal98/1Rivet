import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternsDetailsComponent } from './interns-details/interns-details.component';
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
      },
      {
        path: 'edit/:id',
        component: InternsFormComponent
      },

      {
        path: 'details/:id',
        component: InternsDetailsComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternsRoutingModule { }
