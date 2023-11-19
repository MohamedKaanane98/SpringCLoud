import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bills: any;
  CustomerID !: number

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.CustomerID = route.snapshot.params["Customerid"];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8088/BILLING-SERVICE/bills/search/ByCustomerId?Customerid="+this.CustomerID).subscribe({
      next: (data) => {
        this.bills = data;
      },
      error: err => {

      }
    })
  }

  getBillDetails(b: any) {
    this.router.navigateByUrl("/billDetails/"+b.id)
  }
}
