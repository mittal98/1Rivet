import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { InternsComponent } from './interns/interns.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  { path: 'interns', loadChildren: () => import('./interns/interns.module').then(m => m.InternsModule) },
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
