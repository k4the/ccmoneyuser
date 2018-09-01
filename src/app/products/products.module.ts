import { ProductDetailsComponent } from './product-details/product-details.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ProductMapper } from './product.mapper';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { FuelComponent } from './product-details/fuel/fuel.component';
import { ProductSingleSelectComponent } from './product-single-select/product-single-select.component';
import { LoadingComponent } from './loading/loading.component';
import { ProductsFilterPipe} from './products-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductModalComponent,
    FuelComponent,
    ProductSingleSelectComponent,
    LoadingComponent,
    ProductsFilterPipe,
    StarRatingComponent,
    ProductDetailsComponent
  ],
  providers: [ProductMapper]
})
export class ProductsModule { }
