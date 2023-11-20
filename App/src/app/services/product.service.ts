import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url ="http://localhost:8088/INVENTORY-SERVICE/Addproducts";
  constructor(private http:HttpClient) { }

  public getProducts():Observable<Array<Product>>{
    return this.http.get<Array<Product>>("http://localhost:8088/INVENTORY-SERVICE/products")
  }
  public deleteProducts(product:Product){
    return this.http.delete(`http://localhost:8088/INVENTORY-SERVICE/delete/${product.id}`)
  }

  public saveProduct(product: Product):Observable<Product> {
    return this.http.post<Product>(this.url,product);
  }

}
