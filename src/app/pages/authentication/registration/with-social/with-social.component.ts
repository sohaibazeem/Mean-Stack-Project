import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {RegisterService} from '../../../service/register.service';
@Component({
  selector: 'app-with-social',
  templateUrl: './with-social.component.html',
  styleUrls: ['./with-social.component.css']
})
export class WithSocialComponent implements OnInit {
  username: String;
  email: String;
  password: String;
  confirmpassword: String;
  ngForm: FormGroup;
  constructor(private fb: FormBuilder , private rs:RegisterService) { this.createForm();}

  createForm() {
    this.ngForm = this.fb.group({
      username: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ],
      confirmpassword: ['', Validators.required ]
    });
  }
 addBusiness() {
   this.username = this.ngForm.get('username').value;
   this.email = this.ngForm.get('email').value;
   this.password = this.ngForm.get('password').value;
   this.confirmpassword = this.ngForm.get('confirmpassword').value;
   console.log("username", this.username)
   console.log("email", this.email)
   console.log("password", this.password)
   console.log("confirmpassword", this.confirmpassword)
   this.rs.addBusiness(this.username,this.email,this.password,this.confirmpassword);
  }

  register(){
    let testing = this.ngForm.value;
    //let value = this.ngForm.get('username').value
       console.log(testing);
  }

  ngOnInit() {
  }

}
