import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {KeycloakSecurityService} from "../services/keycloak-security.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Array<Product>=[];
  productsAll : Array<Product>=[];
  panier:Array<Product>=[];
  categories : Array<any>=[];
  public keyword:string="";
  totalpages!:number;
  pageSize:number=6;
  currentPage:number=0;
  totalproducts!:number;
  selectedCategory:string="";

  constructor(private router:Router,private productservice:ProductService,public securityService:KeycloakSecurityService) {

  }

  ngOnInit(): void {
    this.getProduct();
    this.productservice.getAllProducts().subscribe({
      next: (data) => {
        // @ts-ignore
        this.productsAll = data._embedded.products;
        for (let i = 0; i < this.productsAll.length; i++) {
          this.categories.push(this.productsAll[i].categorie);
          this.categories = Array.from(new Set(this.categories));
        }
      }
    });
    const storedPanier = localStorage.getItem('panier');
    if (storedPanier) {
      this.panier = JSON.parse(storedPanier);
    }
  }


  getProduct(){
    this.currentPage=0;
    this.productservice.getProducts(this.keyword,this.currentPage,this.pageSize).subscribe({
      next: (data) => {
        // @ts-ignore
        this.products = data._embedded.products;
        // @ts-ignore
        this.totalproducts = data.page.totalElements;
        // @ts-ignore
        this.totalpages=data.page.totalPages;
        // @ts-ignore
        this.currentPage=data.page.number;
        if(this.totalproducts==0){
          alert("Aucun Article Trouvé")
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
    console.log(this.totalproducts);
  }

  handleEdit(p: Product) {
    this.router.navigateByUrl("/editproduct/"+p.id);
  }

  hadledotopage(page: number) {
    this.currentPage=page;
    this.productservice.getProducts(this.keyword,this.currentPage,this.pageSize).subscribe({
      next: (data) => {
        // @ts-ignore
        this.products = data._embedded.products;
        // @ts-ignore
        this.totalproducts = data.page.totalElements;
        // @ts-ignore
        this.totalpages=data.page.totalPages;
        // @ts-ignore
        this.currentPage=data.page.number;
      },
      error: err => {
        console.log(err)
      }
    })
  }

  onCategoryChange() {
    if(this.selectedCategory.length!=0){
    this.productservice.getProductsbyCategorie(this.selectedCategory,0,this.pageSize).subscribe({
      next:(data)=>{
        // @ts-ignore
        this.products = data._embedded.products;
        // @ts-ignore
        this.totalproducts = data.page.totalElements;
        // @ts-ignore
        this.totalpages=data.page.totalPages;
        // @ts-ignore
        this.currentPage=data.page.number;
    },
      error: err => {
        console.log(err)
      }
    })
    }
    else this.getProduct();
  }

  ajouterauPanier(p: Product) {
        console.log("Ajouté Au panier"+p.id);
  }

}

