import { Component, OnInit } from '@angular/core';
import { BillModel } from "../model/bill.model";
import {KeycloakSecurityService} from "../services/keycloak-security.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  Bills: BillModel[] = [];

  constructor(private securityService: KeycloakSecurityService,private router: Router) {}

  ngOnInit(): void {
    if (!this.securityService.kc.authenticated) {
      // If not authenticated, redirect to the root path
      this.router.navigate(['/']);
      return;
    }
    // Retrieve stored bills from localStorage
    const storedBills = localStorage.getItem('bills');

    if (storedBills) {
      this.Bills = JSON.parse(storedBills);
    } else {
      console.error('No bills found');
    }
  }
}
