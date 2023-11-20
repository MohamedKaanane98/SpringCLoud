import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  productid!:number;
  productFormGroup !:FormGroup
  constructor(private route:ActivatedRoute,private productservice:ProductService,private fb :FormBuilder,private router : Router) {

  }
  ngOnInit(): void {
    this.productid=this.route.snapshot.params["id"];
    this.productservice.getproductbyid(this.productid).subscribe({
      next:(product) => {
        this.productFormGroup=this.fb.group({
          id:this.fb.control(product.id),
          name:this.fb.control(product.name),
          price:this.fb.control(product.price)
        })
      }
    })
  }

  updateProduct() {
    let product = this.productFormGroup.value;
    this.productservice.updateproducts(product).subscribe({
      next:value => {
        alert(JSON.stringify(value));
        this.router.navigateByUrl("/products");
      }
    });

  }
}
