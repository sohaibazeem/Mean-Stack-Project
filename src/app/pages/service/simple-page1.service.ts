import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SimplePage1Service {

  uri = 'http://localhost:4000/farrindoneast/add';
  constructor(private http: HttpClient) { }
  addBusiness(id,opid,weeknumber,operator,sat,sun,mon,tue,wed,thu,fri,total,comments) {
    const obj = {
      id: id,
      opid: opid,
      weeknumber: weeknumber,
      operator:operator,
      sat:sat,
      sun:sun,
      mon:mon,
      tue:tue,
      wed:wed,
      thu:thu,
      fri:fri,
      total:total,
      comments:comments
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

getBusinesses() {
  return this
         .http
         .get(`${this.uri}`);
}

}
