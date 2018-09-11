import { Keys } from './../../global.constants';
import { ProductLabels, ProductMessages, ProductProperties } from '../products.constants';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { environment } from '../../../environments/environment';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productProperties = ProductProperties;
  isLoggedIn = false;
  totalProducts = 0;
  productMessages = ProductMessages;
  productLabels = ProductLabels;
  keys = Keys;
  showSwitch = false;
  title: string = null;
  message: string = null;
  type: string = null;
  productToSwitchId: string = null;
  isLoading = false;
  sortAscYearlyCost = false;
  sortAscName = false;
  searchText = '';
  limit: number = 9;
  imageUrl = environment.imageUrl;

  constructor(
    public productsService: ProductsService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  more(): void {
    this.limit += 5;
  }

  sortProductsByProperty(property: any): void {
    if(property === this.productProperties.name) {
      if(this.sortAscName) {
        this.productsService.sortProducts(property, 'DESC', this.products);
      } else {
        this.productsService.sortProducts(property, 'ASC', this.products);
      }
      this.sortAscName = !this.sortAscName;
    }
    if(property === this.productProperties.totalYearlyCost) {
      if(this.sortAscYearlyCost) {
        this.productsService.sortProducts(property, 'DESC', this.products);
      } else {
        this.productsService.sortProducts(property, 'ASC', this.products);
      }
      this.sortAscYearlyCost = !this.sortAscYearlyCost;
    }
  }

  getProducts = () => {
    this.isLoading = true;
    this.productsService.getProducts().subscribe(
      data => {
        this.products = [...data];
        this.isLoading = false;
      },
      err => {
        console.log(err);
        this.isLoading = false;
      }
    );
  };

  openSwitchModal(product: Product): void {
    this.title = this.productLabels.deleteProduct;
    this.message = 'Sorry ' + product.name;
    this.type = this.keys.warning;
    this.productToSwitchId = product.id;
    this.showSwitch = true;
  }

  switchProduct(item: any): void {
    this.closeSwitch();
    this.productToSwitchId = null;
  }

  closeSwitch(): void {
    this.showSwitch = false;
    this.productToSwitchId = null;
  }
}
