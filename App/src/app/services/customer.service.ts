import { Injectable } from '@angular/core';
import {Product} from "../model/product.model";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public getCustomer():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(`http://localhost:8088/CUSTOMER-SERVICE/customers`)
  }
  public deleteCustomer(customer:Customer){
    return this.http.delete(`http://localhost:8088/CUSTOMER-SERVICE/delete/${customer.id}`)
  }

  public saveCustomer(customer: Customer):Observable<Customer> {
    return this.http.post<Customer>('http://localhost:8088/CUSTOMER-SERVICE/Addcustomer',customer);
  }

}
