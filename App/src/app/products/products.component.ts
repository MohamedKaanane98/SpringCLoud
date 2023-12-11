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
  products : Array<Product>=[];
  public keyword:string="";
  totalpages:number=0;
  pageSize:number=3;
  currentPage:number=0;
  totalproducts:number=0;

  constructor(private router:Router,private productservice:ProductService) {
  }

  ngOnInit(): void {
      this.getProduct()
  }

  getProduct(){
    this.productservice.getProducts(this.keyword,this.currentPage,this.pageSize).subscribe({
      next: (data) => {
        // @ts-ignore
          this.products = data._embedded.products;
          // @ts-ignore
          this.totalproducts = data.page.totalElements;
          this.totalpages=Math.floor(this.totalproducts/this.pageSize);
          if(this.totalproducts % this.pageSize !=0){
            this.totalpages=this.totalpages+1;
          }
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

  handleEdit(p: Product) {
      this.router.navigateByUrl("/editproduct/"+p.id);
  }

    hadledotopage(page: number) {
      this.currentPage=page;
      this.getProduct();
    }
}

