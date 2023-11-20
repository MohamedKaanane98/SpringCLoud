import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Product>=[];
  public keyword:string="";
  constructor(private router:Router,private productservice:ProductService) {
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

    searchProduct() {
      this.productservice.getProducts().subscribe({
        next:value => {
          this.products=value
          if(this.keyword==""){
            this.getProduct();
          }else{
            this.products=this.products.filter(p=>p.name.toLowerCase().includes(this.keyword.toLowerCase()))
          }
        }
      })
    }

  handleEdit(p: Product) {
      this.router.navigateByUrl("/editproduct/"+p.id);
  }
}

