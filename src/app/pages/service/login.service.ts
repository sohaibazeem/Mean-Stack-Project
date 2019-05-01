import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User } from '../models/user.login';
@Injectable()
export class LoginService {
  uri = 'http://localhost:4000/login/loginuser';


  constructor(private http: HttpClient) { }

  
  addBusiness( email, password) {
    const obj = {
      
      email: email,
      password: password
    };
    console.log(obj);
    this.http.post(this.uri, obj)
        .subscribe(res => {
          console.log("res by service", res)
        },
         err=>{
           console.log("err by service", err)
          }
        );
  }
  




}
