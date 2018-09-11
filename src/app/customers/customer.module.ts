import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerMapper } from './customer.mapper';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [CustomerMapper]
})
export class CustomerModule { }
