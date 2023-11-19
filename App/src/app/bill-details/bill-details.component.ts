import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {
  billsDetails: any;
  BillId !: number
  total !:number

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.BillId = route.snapshot.params["Billid"];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8088/BILLING-SERVICE/FullBill/"+this.BillId).subscribe({
      next: (data) => {
        this.billsDetails = data;
      },
      error: err => {

      }
    })
  }
}
