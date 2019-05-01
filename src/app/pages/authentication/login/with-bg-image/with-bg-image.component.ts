import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {LoginService} from '../../../service/login.service';
@Component({
  selector: 'app-with-bg-image',
  templateUrl: './with-bg-image.component.html',
  styleUrls: ['./with-bg-image.component.css']
})
export class WithBgImageComponent implements OnInit {
  email: String;
  password: String;
  ngForm: FormGroup;
  constructor(private fb: FormBuilder , private ls:LoginService) {this.createForm(); }
  createForm() {
    this.ngForm = this.fb.group({
      
      email: ['', Validators.required ],
      password: ['', Validators.required ],
    
    });
  }

  addBusiness() {
    
    this.email = this.ngForm.get('email').value;
    this.password = this.ngForm.get('password').value;
   
   
    console.log("email", this.email)
    console.log("password", this.password)
  
    this.ls.addBusiness(this.email,this.password);
   }

  ngOnInit() {
  }

}
