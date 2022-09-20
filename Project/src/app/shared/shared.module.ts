import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CurrencyPipePipe } from './currency-pipe.pipe';
import { GenderPipePipe } from './gender-pipe.pipe';



@NgModule({
  declarations: [
    CurrencyPipePipe,
    GenderPipePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CurrencyPipePipe,
   GenderPipePipe
  ]
})
export class SharedModule { }
