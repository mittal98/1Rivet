import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomPipeComponent } from './pipe/custom-pipe/custom-pipe.component';
import { InbuiltPipeComponent } from './pipe/inbuilt-pipe/inbuilt-pipe.component';
import { PipeModule } from './pipe/pipe.module';

import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'logo',
    component: LogoComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,

  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'setting',
    component: SettingsComponent
  },

  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'inbuilt-pipe',
    component: InbuiltPipeComponent
  },
  {
    path: 'custom-pipe',
    component: CustomPipeComponent}
    ,
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) },

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
