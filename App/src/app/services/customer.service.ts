import { Injectable } from '@angular/core';
import {Product} from "../model/product.model";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public deleteCustomer(customer:Customer){
    return this.http.delete(`http://localhost:8088/CUSTOMER-SERVICE/delete/${customer.id}`)
  }
}
