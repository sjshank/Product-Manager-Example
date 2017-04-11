import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductDetailComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit() {
  }

  deleteProduct(id):void{
    console.log(id);
  }

}
