import { StarRatingComponent } from './star-rating.component'

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StarRatingComponent],
  exports: [StarRatingComponent]
})
export class StarRatingModule { }
