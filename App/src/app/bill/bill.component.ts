import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {KeycloakSecurityService} from "../services/keycloak-security.service";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {CustomerService} from "../services/customer.service";
import {Customer} from "../model/customer.model";
import {BillModel} from "../model/bill.model";


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bills: any;
  AllBills!:Array<BillModel>;
  Bills: BillModel | undefined;
  selectedproducts:Array<Product>=[];
  CustomerID !: number
  customerName:string="";
  customerEmail:string="";
  customer!:Customer;
  totalAmount:number=0;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,public securityService:KeycloakSecurityService,public customerService:CustomerService) {
    this.CustomerID = route.snapshot.params["Customerid"];
  }

  ngOnInit(): void {
    // @ts-ignore
    if (!this.securityService.kc.authenticated) {
      alert("Accées Non Autorisées")
      this.router.navigateByUrl("");
    }else {
      const storedData = localStorage.getItem('selectedProduct');
      const storedAmount = localStorage.getItem('totalAmount');
      // @ts-ignore
      this.totalAmount=JSON.parse(storedAmount);
      if (storedData) {
        this.selectedproducts = JSON.parse(storedData);
        console.log(storedData);
      }
      this.customerName=this.securityService.customer.name;
      this.customerEmail=this.securityService.customer.email;
      this.customerService.getcustomerbyemail(this.customerEmail).subscribe({
        next:(data)=>{
          //@ts-ignore
          this.customer=data._embedded.customers[0];
          if(this.customer.adresse==null&&this.customer.telephone==null) {
            alert("Profile Non Renseigné")
            this.router.navigateByUrl("/editcustomer/"+this.customer.id)
          }else {
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
        })
      }
  }

  getBillDetails(b: any) {
    this.router.navigateByUrl("/billDetails/"+b.id)
  }

  savebill() {
    localStorage.setItem('selectedProduct',"");
    localStorage.setItem('totalAmount',"")
    this.Bills = {
      id: Math.random(),
      customerId: this.CustomerID,
      customer: this.customer,
      billingdate: new Date(),
      productItems: this.selectedproducts,
      total:this.totalAmount,
    };

    // Retrieve existing bills from localStorage
    const storedBills = localStorage.getItem('bills') || '[]';
    const existingBills: BillModel[] = JSON.parse(storedBills);

    // Make sure existingBills is an array
    if (!Array.isArray(existingBills)) {
      console.error('Invalid data in localStorage. Resetting bills.');
      localStorage.removeItem('bills');
      return;
    }

    // Add the new bill to the existing bills
    existingBills.push(this.Bills);

    // Store the updated bills array in localStorage
    localStorage.setItem('bills', JSON.stringify(existingBills));

    // Alert and navigate to /mesfactures with the bills data in the URL
    alert("Votre commande est acceptée, notre service client va vous contacter afin de confirmer les informations nécessaires. À bientôt");
    this.router.navigateByUrl('/mesfactures');
  }

}
