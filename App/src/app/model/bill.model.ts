import {Customer} from "./customer.model";
import {Product} from "./product.model";

export interface BillModel{
  id:number,
  customerId:number,
  customer:Customer,
  billingdate:Date,
  productItems:Array<Product>,
}
