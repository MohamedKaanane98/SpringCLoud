import { Injectable } from '@angular/core';
import {KeycloakInstance} from "keycloak-js";
import {Customer} from "../model/customer.model";
import {CustomerService} from "./customer.service";
import {Router} from "@angular/router";
declare var Keycloak:any;
@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc:any;
  //@ts-ignore
  customer: Customer = { id:null ,name: '', email: '' ,adresse:null,telephone:null};
  constructor() {
  }
  init(){
    return new Promise((resolve, reject)=>{
      console.log("security ini...")
      this.kc = new Keycloak({
        url: "http://localhost:8080/",
        realm: "EShop",
        clientId: "AngularApp"
      });
      this.kc.init({onLoad:'check-sso',promiseType:'native'})
        .then((authenticated:any) =>{
          console.log(this.kc.token);
          resolve(authenticated);
          this.customer.name = this.kc.tokenParsed?.['name'] || '';
          this.customer.email = this.kc.tokenParsed?.['email'] || '';
        }).catch((err: any)=>{
          console.log(err);
          reject(err);
      });
    });
  }
  /*
  public kc!:KeycloakInstance;
  name:string="";
  // @ts-ignore
  customer: Customer = { id:null ,name: '', email: '' };
  constructor(public customerService:CustomerService,public router : Router) { }
  public async init() {
    console.log("Security Initialisation")
    this.kc = new Keycloak({
      url: "http://localhost:8080/",
      realm: "EShop",
      clientId: "AngularApp"
    });
    await this.kc.init({
      onLoad: "check-sso"
    });
    this.customer.name = this.kc.tokenParsed?.['name'] || '';
    this.customer.email = this.kc.tokenParsed?.['email'] || '';
    this.name=this.customer.name;
    if(this.customer.name!=null&&this.customer.email) {
      this.customerService.getcustomerbyname(this.customer.name).subscribe({
        next: data => {
          //@ts-ignore
         if(data._embedded.customers.length==0){
           this.customerService.saveCustomer(this.customer).subscribe({
             next: data => {
               if (this.kc.hasRealmRole('Admin')) {
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
   */
}
