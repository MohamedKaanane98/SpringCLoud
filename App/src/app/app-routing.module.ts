import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {BillComponent} from "./bill/bill.component";
import {BillDetailsComponent} from "./bill-details/bill-details.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {PanierComponent} from "./panier/panier.component";
import {CommentaireComponent} from "./commentaire/commentaire.component";
import {FactureComponent} from "./facture/facture.component";


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"panier",component:PanierComponent},
  {path:"customers",component:CustomersComponent},
  {path:"bill/:Customerid",component:BillComponent},
  {path:"billDetails/:Billid",component:BillDetailsComponent},
  {path:"newproducts",component:NewProductComponent},
  {path:"newcustomer",component:NewCustomerComponent},
  {path:"editproduct/:id",component:EditProductComponent},
  {path:"detailsproducts/:id",component:ProductDetailsComponent},
  {path:"editcustomer/:id",component:EditCustomerComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"commentaire/:productid",component:CommentaireComponent},
  {path:"mesfactures",component:FactureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
