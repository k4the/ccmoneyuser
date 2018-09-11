import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product.model';
import { ProductMapper } from './product.mapper';
import { ProductUrl } from './products.constants';

const productsUrl = environment.apiUrl + ProductUrl + '/';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient, private productMapper: ProductMapper) {}

  sortProducts<T>(propName: keyof Product, order: "ASC" | "DESC", products: Array<Product>): void {
    products.sort((a, b) => {
        if (a[propName] < b[propName])
            return -1;
        if (a[propName] > b[propName])
            return 1;
        return 0;
    });
    if (order === 'DESC') {
      products.reverse();
    }
  }

  getProducts(): Observable<Product[]> {
    const results = this.http.get<{ message: string; products: Array<any> }>(
      productsUrl
    );
    return results.pipe(
      map(productData => {
        return productData.products.map(product => {
          return this.productMapper.mapProductFromJson(product);
        });
      })
    );
  }

  getProduct(id: string): Observable<any> {
    if (id) {
      const result = this.http.get<{}>(productsUrl + id);
      return result.pipe(
        map(productData => {
          return this.productMapper.mapProductFromJson(productData);
        })
      );
    }
  }
}
