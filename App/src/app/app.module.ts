import {APP_INITIALIZER, ApplicationRef, DoBootstrap, NgModule} from '@angular/core';
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
import {KeycloakSecurityService} from "./services/keycloak-security.service";
import { PanierComponent } from './panier/panier.component';

/*
export function kcfactory(kcSecurity:KeycloakSecurityService) {
  return ()=>kcSecurity.init();
}
*/
const keycloaksec=new KeycloakSecurityService();
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
    PanierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, FormsModule, NgOptimizedImage

  ],
  providers: [
    /*{provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcfactory,multi:true}*/
    {provide:KeycloakSecurityService,useValue:keycloaksec}
  ],
  /*bootstrap: [AppComponent]*/
})
export class AppModule implements DoBootstrap{
  ngDoBootstrap(appRef: ApplicationRef): void {
    keycloaksec.init()
      .then(authenticated =>{
        console.log(authenticated);
        appRef.bootstrap(AppComponent)
      }).catch(err=>{
        console.log(err);
    })
  }
}
