import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm !:FormGroup;

  constructor(private router:Router , private fb : FormBuilder) {
  }

  ngOnInit(): void {
    this.LoginForm=this.fb.group({
      username:this.fb.control(null),
      password:this.fb.control(null),
    })
  }

}
