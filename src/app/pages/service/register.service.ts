import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
  uri = 'http://localhost:4000/register/add';
  
  constructor(private http: HttpClient) { }


  addBusiness(username, email, password, confirmpassword) {
    const obj = {
      username: username,
      email: email,
      password: password,
      confirmpassword:confirmpassword
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
