import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {KeycloakSecurityService} from "../services/keycloak-security.service";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bills: any;
  selectedproducts:Array<Product>=[];
  CustomerID !: number
  customerName:string="";
  customerEmail:string="";

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,public securityService:KeycloakSecurityService,public productservice:ProductService) {
    this.CustomerID = route.snapshot.params["Customerid"];
  }

  ngOnInit(): void {
    if (!this.securityService.kc.authenticated) {
      alert("Accées Non Autorisées")
      this.router.navigateByUrl("");
    }else {
      const storedData = localStorage.getItem('selectedProduct');
      if (storedData) {
        this.selectedproducts = JSON.parse(storedData);
        console.log(storedData);
      }
      this.customerName=this.securityService.customer.name;
      this.customerEmail=this.securityService.customer.email;
      this.http.get("http://localhost:8088/BILLING-SERVICE/bills/search/ByCustomerId?Customerid=" + this.CustomerID).subscribe({
        next: (data) => {
          //@ts-ignore
          if (data._embedded.bills.length == 0) {
            alert("Aucune Facture Pour l'instant");
          } else
            this.bills = data;
        },
        error: err => {
              console.log(err)
        }
      });

    }
  }

  getBillDetails(b: any) {
    this.router.navigateByUrl("/billDetails/"+b.id)
  }
}
