import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  RegisterForm!:FormGroup;

  constructor(private router :Router,private fb :FormBuilder, private customerservice :CustomerService) {
  }

  ngOnInit(): void {
    this.RegisterForm=this.fb.group({
      name:this.fb.control(null,[Validators.required]),
      email:this.fb.control(null,[Validators.required]),
      password:this.fb.control(null,[Validators.required]),
    })
  }

  saveCustomer() {
    let customer = this.RegisterForm.value;
    this.customerservice.saveCustomer(customer).subscribe({
      next:data => {
        alert(JSON.stringify("Vous etes bien Inscrits sur le site"))
        this.router.navigateByUrl("/customers")
      },error : err =>{
        console.log(err);
      }
    });
  }
}
