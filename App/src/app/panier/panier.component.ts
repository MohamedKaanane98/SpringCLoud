import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {KeycloakSecurityService} from "../services/keycloak-security.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit{
  selectedProduct:Array<Product>=[]
  quantite: number=0;
  totalAmount:number=0;
  constructor(public route:ActivatedRoute,public securityService:KeycloakSecurityService,public router:Router) {
  }

  ngOnInit(): void {
    if (!this.securityService.kc.authenticated) {
      this.router.navigateByUrl("");
    } else {
        const storedData = localStorage.getItem('selectedProduct');
        if (storedData) {
            this.selectedProduct = JSON.parse(storedData);
            console.log(storedData);
        }
          for (let p of this.selectedProduct){
            this.totalAmount+=p.quantite*p.price;
          }
      };
  }


  augmenter(p: Product) {
    for (let c=0;c<this.selectedProduct.length;c++){
      if(this.selectedProduct[c].id==p.id){
        this.selectedProduct[c].quantite++;
        this.totalAmount=this.totalAmount+p.price;
        localStorage.setItem('selectedProduct', JSON.stringify(this.selectedProduct));
      }
    }

  }

  diminuer(p: Product) {
      for (let c=0;c<this.selectedProduct.length;c++){
          if(this.selectedProduct[c].id==p.id){
              this.selectedProduct[c].quantite--;
              this.totalAmount = this.totalAmount - p.price;
              localStorage.setItem('selectedProduct', JSON.stringify(this.selectedProduct));
            if(this.selectedProduct[c].quantite==0) {
                this.selectedProduct=this.selectedProduct.filter(o=>o.id!=this.selectedProduct[c].id);
                localStorage.setItem('selectedProduct', JSON.stringify(this.selectedProduct));
            }
          }
      }
  }
}
