import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ObservableComponent } from './observable/observable.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent,
    SubjectComponent,
    BehaviourSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ObservableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
