import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {KeycloakSecurityService} from "../services/keycloak-security.service";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bills: any;
  CustomerID !: number

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,public securityService:KeycloakSecurityService) {
    this.CustomerID = route.snapshot.params["Customerid"];
  }

  ngOnInit(): void {
    if (!this.securityService.kc.authenticated) {
      alert("Accées Non Autorisées")
      this.router.navigateByUrl("");
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

        }
      })
    }
  }

  getBillDetails(b: any) {
    this.router.navigateByUrl("/billDetails/"+b.id)
  }
}
