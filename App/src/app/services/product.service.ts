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

  public getAllProducts():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`http://localhost:8088/INVENTORY-SERVICE/products`)
  }

  public getAllSelectedProducts():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`http://localhost:8088/INVENTORY-SERVICE/products/search/selected`)
  }

  public getProducts(keyword:string="",page:number=0,size:number=3):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`http://localhost:8088/INVENTORY-SERVICE/products/search/keyword?name=${keyword}&page=${page}&size=${size}`)
  }
  public getProductsbyCategorie(categorie:any,page:number=0,size:number=3):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`http://localhost:8088/INVENTORY-SERVICE/products/search/categorie?categorie=${categorie}&page=${page}&size=${size}`)
  }

  public deleteProducts(product:Product){
    return this.http.delete(`http://localhost:8088/INVENTORY-SERVICE/delete/${product.id}`)
  }

  public saveProduct(product: Product):Observable<Product> {
    return this.http.post<Product>(this.url,product);
  }

  public getproductbyid(productid: number):Observable<Product> {
    return this.http.get<Product>(`http://localhost:8088/INVENTORY-SERVICE/products/${productid}`)

  }

  public updateproducts(product: any):Observable<Product>{
    return this.http.put<Product>(`http://localhost:8088/INVENTORY-SERVICE/products/${product.id}`,product);

  }

}
