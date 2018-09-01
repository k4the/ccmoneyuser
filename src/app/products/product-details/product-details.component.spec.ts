import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { FuelComponent } from './fuel/fuel.component';
// import { ProductFixture } from '../fixtures/product.fixture';
import { Product } from '../product.model';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  // let product: Product = ProductFixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent, FuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    // component.product = product;
    fixture.detectChanges();
  });

  it('should create ProductDetailsComponent', () => {
    expect(component).toBeTruthy();
  });
});
