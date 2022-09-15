import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { InBuiltPipesComponent } from './in-built-pipes/in-built-pipes.component';



@NgModule({
  declarations: [
    CustomPipesComponent,
    InBuiltPipesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
