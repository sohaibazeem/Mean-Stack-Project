import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable()
export class SimplePage8Service {
  showMsg: boolean = false;

  uri = 'http://localhost:4000/employeedocumentation/add';
  constructor(private http: HttpClient, private Router: Router) { }
  addBusiness(employeefullname,workrelateddocument,personaldocument,assesments)
   {
    const obj = {
      employeefullname: employeefullname,
      workrelateddocument: workrelateddocument,
      personaldocument:personaldocument,
      assesments:assesments
    };
    console.log(obj);
    this.http.post(this.uri, obj)
        .subscribe(res => {
          console.log("res by service", res);
        },
         err=>{
           console.log("err by service", err)
          }
        );

}

getBusinesses() {
  return this
         .http
         .get(`${this.uri}`);
}



}
