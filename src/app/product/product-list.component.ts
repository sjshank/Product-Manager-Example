import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductListComponent implements OnInit {
  title: string = "Product List"
  products: any = [];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._getProductList();
  }

  private _getProductList() {
    this._productService.list()
      .subscribe(data => {
        this.products = data.list;
      },
      error => {
        console.log(error);
      })
  }

  deleteProduct(event): void {
    this._productService.delete(event.id)
      .subscribe(data => {
        if (data) {
          this._getProductList();
        }
      },
      error => {
        console.log(error);
      });
  }

}
