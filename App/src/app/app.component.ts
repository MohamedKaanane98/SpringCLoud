import {Component, OnInit} from '@angular/core';
import {KeycloakSecurityService} from "./services/keycloak-security.service";
import {CustomerService} from "./services/customer.service";
import {Customer} from "./model/customer.model";
import {Router} from "@angular/router";
import {ProductService} from "./services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'E-Shop';
  customerID:number=0;

  constructor(public securityService:KeycloakSecurityService,public customerService:CustomerService,public router:Router,public productservice:ProductService) {
  }

  ngOnInit(): void {
    if(this.securityService.kc.authenticated){
      if(this.securityService.customer.name!=null&&this.securityService.customer.email) {
        this.customerService.getcustomerbyname(this.securityService.customer.name).subscribe({
          next: data => {
            //@ts-ignore
            if (data._embedded.customers.length > 0) {
              //@ts-ignore
              this.customerID = data._embedded.customers[0].id;
              console.log(this.customerID);
            }
            //@ts-ignore
            if(data._embedded.customers.length==0){
              this.customerService.saveCustomer(this.securityService.customer).subscribe({
                next: data => {
                  alert("Ajoutée a la BD");
                  if (this.securityService.kc.hasRealmRole('Admin')) {
                    this.router.navigateByUrl("/customers");
                  } else {
                    this.router.navigateByUrl("");
                  }
                }, error: err => {
                  console.log(err);
                }
              });
            }
          }, error: err => {
            console.log(err);
          }
        })
      }
    }
  }

  onLogout() {
    this.securityService.kc.logout();
    localStorage.clear();
  }

  onLogin() {
    this.securityService.kc.login();
  }

  onchangepassword() {
    this.securityService.kc.accountManagement();
  }

  isAdmin() {
   return  this.securityService.kc.hasRealmRole('Admin');
  }
}
