import { FuelModule } from './fuel/fuel.module';
import { ProductDetailsComponent } from './product-details.component';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FuelModule
  ],
  declarations: [ProductDetailsComponent],
  exports: [ProductDetailsComponent]
})
export class ProductDetailsModule { }
