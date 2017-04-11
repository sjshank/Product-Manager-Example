import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductAddComponent } from './product/product-add.component';

import { ProductService } from './product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductAddComponent, pathMatch: 'full' },
      { path: 'list', component: ProductListComponent, pathMatch: 'full' },
      { path: '*', component: ProductAddComponent, pathMatch: 'full' }
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
