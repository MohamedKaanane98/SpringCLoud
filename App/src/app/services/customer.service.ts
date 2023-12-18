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
    return this.http.get<Array<Customer>>(`http://localhost:8088/CUSTOMER-SERVICE/customersAll`)
  }
  public deleteCustomer(customer:Customer){
    return this.http.delete(`http://localhost:8088/CUSTOMER-SERVICE/delete/${customer.id}`)
  }

  public saveCustomer(customer: Customer):Observable<Customer> {
    return this.http.post<Customer>('http://localhost:8088/CUSTOMER-SERVICE/Addcustomer',customer);
  }

  public getcustomerbyid(CustomerId: number):Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8088/CUSTOMER-SERVICE/customers/${CustomerId}`)
  }

  public getcustomerbyemail(Customeremail: string):Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8088/CUSTOMER-SERVICE/customers/search/email?email=${Customeremail}`)
  }
  public getcustomerbyname(CustomerName: string):Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8088/CUSTOMER-SERVICE/customers/search/name?name=${CustomerName}`)
  }

  public updateCustomer(customer: any):Observable<Customer>{
    return this.http.put<Customer>(`http://localhost:8088/CUSTOMER-SERVICE/customers/${customer.id}`,customer);

  }

}
