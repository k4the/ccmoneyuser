import { environment } from './../../environments/environment';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Auth } from '../auth/auth.model';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerMapper } from './customer.mapper';
import { Customer, Paying } from './customer.model';
import { ProductMapper } from '../products/product.mapper';
import { CustomerEndPoints } from './customer.constants';

const customersUrl = environment.apiUrl + '/customers/';
const loginUrl = 'login';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements OnInit {
  loggedInCustomer: Customer;

  private token: string = null;
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();
  private tokenTimer: any;

  ngOnInit(): void {
    this.loggedInCustomer = null;
  }
  constructor(
    private http: HttpClient,
    private router: Router,
    private customerMapper: CustomerMapper,
    private productMapper: ProductMapper
  ) {}

  getCustomerByIdWithProducts(id: string, page: string): Observable<any> {
    const item: any = {
      customer: null,
      products: [],
      page: null
    };
    if (id) {
      const url: string = environment.apiUrl + CustomerEndPoints.customerWithProducts + id + '/' + page;
      const result = this.http.get<{
        message: string,
        customer: any,
        products: Array<any>,
        page: any
      }>(url);
      return result.pipe(
        map(data => {
          if (data.products && data.products.length) {
            for (let i = 0; i < data.products.length; i++) {
              item.products.push(
                this.productMapper.mapProductFromJson(data.products[i])
              );
            }
          }
          item.customer = this.customerMapper.mapCustomerFromJson(
            data.customer
          );
          item.page = data.page;
          return item;
        })
      );
    }
  }

  autoAuthCustomer(): any {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  getToken(): string {
    return this.token;
  }

  getAuthStatusListener(): any {
    return this.authStatusListener.asObservable();
  }

  getIsAuth(): boolean {
    return this.isAuthenticated;
  }

  getLoggedInCustomer() {
    return this.loggedInCustomer;
  }

  login(auth: Auth): Observable<any> {
    if (auth) {
      const result = this.http.post<{
        token: string;
        expiresIn: number;
        customer: Customer;
      }>(customersUrl + loginUrl, auth);
      return result.pipe(
        map(response => {
          if (response.token) {
            const expiresInDuration = response.expiresIn;
            this.setAuthTimer(expiresInDuration);
            const now = new Date();
            const expiresIn = new Date(
              now.getTime() + expiresInDuration * 1000
            );
            this.token = response.token;
            this.saveAuthData(this.token, expiresIn);
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            this.loggedInCustomer = response.customer;
          } else {
            this.isAuthenticated = false;
            this.authStatusListener.next(false);
          }
        })
      );
    }
  }

  logout(): void {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/customers/login']);
  }

  private saveAuthData(token: string, expirationDate: Date): void {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  private getAuthData(): any {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('expiration');
    if (!token || !expiration) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expiration)
    };
  }

  private setAuthTimer(expiresInDuration: number): void {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, expiresInDuration * 1000);
  }
}
