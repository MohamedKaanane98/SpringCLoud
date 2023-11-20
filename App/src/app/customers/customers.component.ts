import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Customer} from "../model/customer.model";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  customers:Array<Customer>=[];
  public keyword: string="";
  constructor(private http:HttpClient , private router:Router,private customerservice:CustomerService) {
  }
  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers(){
    this.customerservice.getCustomer().subscribe({
      next:(data) =>{
        this.customers=data;
      },
      error: err =>{
      }
    })
  }

  getBill(p:any) {
    this.router.navigateByUrl("/bill/"+p.id)
  }

  handleDelete(p:Customer) {
    this.customerservice.deleteCustomer(p).subscribe({
      next:(data) =>{
        this.getCustomers();
      },
      error: err =>{

      }
    })

  }

  searchCustomer() {
      this.customerservice.getCustomer().subscribe({
        next:value => {
          this.customers=value;
          if(this.keyword==""){
            this.getCustomers()
          } else {
            this.customers=this.customers.filter(c => c.name.toLowerCase().includes(this.keyword.toLowerCase()))
            console.log("customer",this.customers);
          }
        }
      })
  }

  handleEdit(p: Customer) {
    this.router.navigateByUrl("/editcustomer/"+p.id);

  }
}
