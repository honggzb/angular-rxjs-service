import { OnInit, Component, ViewChild, AfterViewInit } from '@angular/core';
import { ProductService } from './product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Product } from './models/product.model';

@Component({
  selector: 'qh-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(ProductListComponent) productList: any;
  sessionId: any;
  selectedProduct: any;

  products: Product[] = [
    { name: 'Rice', id: 1, price: 200 },
    { name: 'Beans', id: 2, price: 300 },
    { name: 'Bananna', id: 3, price: 400 },
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.selectedProduct$.subscribe((product) => this.selectedProduct = product );
    this.productService.setProductList(this.products);
  }

  ngAfterViewInit(): void {
    this.sessionId = this.productList.sessionId;
  }

}
