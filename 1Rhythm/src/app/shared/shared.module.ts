import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { CardComponent } from './card/card.component';
import { PhoneMaskingDirective } from './directives/phone-masking.directive';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    BookingHistoryComponent,
    CardComponent,
    PhoneMaskingDirective,
    ManageProfileComponent,
    SearchPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
