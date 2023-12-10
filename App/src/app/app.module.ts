import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from "@angular/common/http";
import { CustomersComponent } from './customers/customers.component';
import { BillComponent } from './bill/bill.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewProductComponent } from './new-product/new-product.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import {NgOptimizedImage} from "@angular/common";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    BillComponent,
    BillDetailsComponent,
    NewProductComponent,
    NewCustomerComponent,
    EditProductComponent,
    EditCustomerComponent,
    ProductDetailsComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, FormsModule, NgOptimizedImage

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
