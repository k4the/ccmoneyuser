import { StarRatingModule } from './star-rating/star-rating.module';
import { FuelModule } from './product-details/fuel/fuel.module';
import { ProductDetailsModule } from './product-details/product-details.module';
import { CcLoadingModule } from './../cc-loading/cc-loading.module';
import { CcModalModule } from './../cc-modal/cc-modal.module';
import { ProductMapper } from './product.mapper';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsFilterPipe} from './products-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProductsRoutingModule,
    CcModalModule,
    CcLoadingModule,
    ProductDetailsModule,
    FuelModule,
    StarRatingModule
,
FuelModule  ],
  declarations: [
    ProductListComponent,
    ProductsFilterPipe
  ],
  providers: [ProductMapper]
})
export class ProductsModule { }
