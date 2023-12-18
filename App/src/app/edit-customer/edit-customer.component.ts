import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit{
  CustomerId!:number;
  CustomerFormGroup!:FormGroup
  constructor(private route:ActivatedRoute,private customerservice:CustomerService,private fb :FormBuilder,private router : Router) {
  }
  ngOnInit(): void {
    this.CustomerId=this.route.snapshot.params["id"]
    this.customerservice.getcustomerbyid(this.CustomerId).subscribe({
      next:(product) => {
        this.CustomerFormGroup=this.fb.group({
          id:this.fb.control(product.id),
          name:this.fb.control(product.name),
          email:this.fb.control(product.email),
          adresse:this.fb.control(product.adresse),
          telephone:this.fb.control(product.telephone)
        })
      }
    })
  }

  updateCustomer() {
    let customer = this.CustomerFormGroup.value;
    this.customerservice.updateCustomer(customer).subscribe({
      next:value => {
        alert(JSON.stringify(value));
        this.router.navigateByUrl("/customers");
      }
    });

  }
}
