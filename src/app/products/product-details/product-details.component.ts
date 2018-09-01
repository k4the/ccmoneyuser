import { ProductLabels } from './../products.constants';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { slideHeight } from '../../animations/slideHeight';
import { slideDown } from '../../animations/slideDown';
import { Product } from '../product.model';
import { Keys } from '../../global.constants';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  animations: [
    slideHeight
    // slideDown
  ]
})
export class ProductDetailsComponent implements OnInit {
  keys: any = Keys;
  productLabels = ProductLabels;
  gasOpen: boolean = false;
  electricityOpen: boolean = false;
  fuelType: string = null;
  moreInfoOpen: boolean = false;
  slideDownState = 'closed';

  constructor() { }

  @Input('product') product: Product;

  ngOnInit() {
    if(this.product.fuelType === this.keys.gas || this.product.fuelType === this.keys.both) {
      this.gasOpen = true;
    } else {
      this.electricityOpen = true;
    }
  }

  showTab(type: string) {
    if (type === this.keys.gas) {
      this.gasOpen = true;
      this.electricityOpen = false;
    }
    if (type === this.keys.electricity) {
      this.electricityOpen = true;
      this.gasOpen = false;
    }
  }

  openMoreInfo(): void {
    this.moreInfoOpen = !this.moreInfoOpen;
    (this.slideDownState === 'closed') ? this.slideDownState = 'open' : this.slideDownState = 'closed';
    console.log('in', this.slideDownState)
  }

}
