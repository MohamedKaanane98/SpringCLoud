import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {FormBuilder} from "@angular/forms";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productid!:number;
  product !:Product;
  constructor(private route:ActivatedRoute,private productservice:ProductService,private fb :FormBuilder,private router : Router) {

  }
  ngOnInit(): void {
    this.productid=this.route.snapshot.params["id"];
    this.productservice.getproductbyid(this.productid).subscribe({
      next:(data) => {
          this.product=data;
          console.log(this.product)
      }
    })
  }

}
