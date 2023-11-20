import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  public keyword:string="";
  constructor(private productservice:ProductService) {
  }

  ngOnInit(): void {
      this.getProduct()
  }

  getProduct(){
    this.productservice.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: err => {
        console.log(err)
      }
    })
  }

  handleDelete(p: any) {
      this.productservice.deleteProducts(p).subscribe({
        next:value =>{
          this.getProduct();
        }
      })
  }

}

