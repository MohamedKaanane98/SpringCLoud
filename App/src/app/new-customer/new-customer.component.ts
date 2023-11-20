import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../services/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit{
  CustomerForm !:FormGroup
  constructor(private router :Router,private fb :FormBuilder, private customerservice :CustomerService) {
  }

  ngOnInit(): void {
    this.CustomerForm=this.fb.group({
      name:this.fb.control(null,[Validators.required]),
      email:this.fb.control(null,[Validators.required]),
    })
  }

  saveCustomer() {
        let customer = this.CustomerForm.value;
        this.customerservice.saveCustomer(customer).subscribe({
          next:data => {
            alert(JSON.stringify(data))
            this.router.navigateByUrl("/customers")
          },error : err =>{
            console.log(err);
          }
        });
  }
}
