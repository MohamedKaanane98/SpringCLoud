import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{
  productForm !: FormGroup
  imagePaths: string[] = [
    'assets/iphone.jpg',
    'assets/pcgeant.png',
    'assets/printer.jpg',
    'assets/television.jpg',
    'assets/watch.jpg',
    'assets/camera.jpg',
  ];
  constructor(private router:Router , private fb : FormBuilder,private productservice:ProductService) {
  }
  ngOnInit(): void {
    this.productForm=this.fb.group({
      name:this.fb.control(null,[Validators.required]),
      price:this.fb.control(0,[Validators.required]),
      checked: this.fb.control(false, [Validators.required]),
      image: this.fb.control(null, [Validators.required]),
      description: this.fb.control(null, [Validators.required]),
    })
  }


  saveProduct() {
      let product:Product = this.productForm.value;
      this.productservice.saveProduct(product).subscribe({
        next:data => {
          alert("Produit Ajouté Avec Succes !!")
          this.router.navigateByUrl("/products")
        },error : err =>{
          console.log(err);
        }
      });
  }
}
