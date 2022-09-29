import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'contact',
  component: ContactComponent
}
,
{
  path: 'async-subject',
  component: AsyncSubjectComponent
},
{
  path: 'behaviour-subject',
  component: BehaviourSubjectComponent
},
{
  path: 'replay-subject',
  component: ReplaySubjectComponent
},
{ path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
