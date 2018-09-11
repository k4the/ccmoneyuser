import { CcLoadingModule } from './../../cc-loading/cc-loading.module';
import { CcModalModule } from './../../cc-modal/cc-modal.module';
import { ProductDetailsModule } from './../product-details/product-details.module';
import { StarRatingModule } from './../star-rating/star-rating.module';
import { ProductListComponent } from './product-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    StarRatingModule,
    ProductDetailsModule,
    CcModalModule,
    CcLoadingModule
  ],
  declarations: [ProductListComponent],
  exports: [ProductListComponent]
})
export class ProductListModule { }
