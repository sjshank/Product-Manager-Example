import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductDetailComponent implements OnInit {

  @Input() product;
  @Output() onDeleteProduct = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteProduct(product): void {
    this.onDeleteProduct.emit(product);
  }

}
