import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { ProductService } from './product.service';


@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product.component.less']
})
export class ProductAddComponent implements OnInit {
    title: string = "Add Product";
    pForm: FormGroup;
    constructor(private _fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute,
        private _productService: ProductService) { }

    ngOnInit() {
        this.pForm = this._fb.group({
            'pName': ['', Validators.required],
            'pWeight': ['', Validators.required],
            'pQuantity': ['', Validators.required],
            'pColor': ['', Validators.required]
        });
    }

    saveProduct(model): void {
        console.log(model);
        this._productService.save(model)
            .subscribe(
            data => {
                if (data) {
                    this._router.navigate(['/list']);
                }
            },
            error => {
                console.log("error", error);
            }
            )
    }

}
