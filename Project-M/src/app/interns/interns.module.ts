import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternsRoutingModule } from './interns-routing.module';
import { InternsComponent } from './interns.component';
import { InternsFormComponent } from './interns-form/interns-form.component';
import { InternsListComponent } from './interns-list/interns-list.component';
import { InternsDetailsComponent } from './interns-details/interns-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InternsService } from './interns.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InternsComponent,
    InternsFormComponent,
    InternsListComponent,
    InternsDetailsComponent
  ],
  imports: [
    CommonModule,
    InternsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    InternsService
  ]
})
export class InternsModule { }
