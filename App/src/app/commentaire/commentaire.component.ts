import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../services/customer.service";
import {ProductService} from "../services/product.service";
import {KeycloakSecurityService} from "../services/keycloak-security.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit{
  CommentForm !:FormGroup
  storedBills!:any
  productID!:number;
  constructor(private router :ActivatedRoute,private fb :FormBuilder, private productservice:ProductService,private keyclockservce:KeycloakSecurityService,private http:HttpClient,private route:Router) {
  }
  ngOnInit(): void {
    this.storedBills = localStorage.getItem('bills');
    this.productID=this.router.snapshot.params["productid"];
    this.CommentForm=this.fb.group({
      nomUser:this.fb.control(this.keyclockservce.customer.name),
      message:this.fb.control(null,[Validators.required]),
      product: { id: this.productID },
    })
  }

  saveComment() {
      let com = this.CommentForm.value;
      this.http.post("http://localhost:8088/INVENTORY-SERVICE/Addcom",com).subscribe({
        next:(data)=>{
          console.log(data);
        },error(err){
          console.log(err);
        }
      });
      this.route.navigateByUrl(`/products`);
  }
}
