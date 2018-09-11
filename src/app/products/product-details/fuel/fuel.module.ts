import { FuelComponent } from './fuel.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FuelComponent],
  exports: [FuelComponent]
})
export class FuelModule { }
