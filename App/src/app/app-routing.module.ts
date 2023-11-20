import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {BillComponent} from "./bill/bill.component";
import {BillDetailsComponent} from "./bill-details/bill-details.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";

const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:"customers",component:CustomersComponent},
  {path:"bill/:Customerid",component:BillComponent},
  {path:"billDetails/:Billid",component:BillDetailsComponent},
  {path:"newproducts",component:NewProductComponent},
  {path:"newcustomer",component:NewCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
