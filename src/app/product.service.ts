import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product$ = new BehaviorSubject<any>({});
  selectedProduct$ = this.product$.asObservable();
  private productListBus$ = new BehaviorSubject<any>([]);
  productList$ = this.productListBus$.asObservable();

  constructor() { }

  setProduct(product: Product) {
    this.product$.next(product);
  }

  setProductList(products: Product[]) {
    this.productListBus$.next(products);
  }

}

