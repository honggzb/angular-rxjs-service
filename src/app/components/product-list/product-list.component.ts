import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'qh-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{

  productList: Product[] = [];
  sessionId = Math.random();

  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.productService.productList$.subscribe((products: Product[]) => 
      this.productList = products
    );
  }

  onSelectedProduct(product: Product) {
    this.productService.setProduct(product);
  }

}
