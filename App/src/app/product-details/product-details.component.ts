import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {FormBuilder} from "@angular/forms";
import {Product} from "../model/product.model";
import {HttpClient} from "@angular/common/http";
import {KeycloakSecurityService} from "../services/keycloak-security.service";

interface Commentaire {
  nomUser:String,
  message:String,
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productid!:number;
  product !:Product;
  similarPro :Array<Product>=[];
  commentaires:Array<Commentaire>=[];
  message:Array<String>=[];

  constructor(private route:ActivatedRoute,private productservice:ProductService,private http:HttpClient,public router : Router,public keycloakservice:KeycloakSecurityService) {

  }
  ngOnInit(): void {
    this.productid=this.route.snapshot.params["id"];
    this.productservice.getproductbyid(this.productid).subscribe({
      next:(data) => {
        this.product=data;
        /*if(this.product && this.product.categorie){
          this.productservice.getProductsbyCategorie(this.product.categorie,0,3).subscribe({
            next:(data)=>{
              //@ts-ignore
              this.similarPro=data._embedded.products
            }
          })
        }*/
      }
    })
    this.http.get(`http://localhost:8088/INVENTORY-SERVICE/products/${this.productid}/commentaires`).subscribe({
      next:(data)=>{
        //@ts-ignore
        this.commentaires=data._embedded.commentaires;
        for(let c of this.commentaires){
          //@ts-ignore
          this.message.push(c["message"])
          console.log(this.message);
        }
      }
    })
  }

}
