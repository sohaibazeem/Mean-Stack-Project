import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SimplePage3Service {

  uri = 'http://localhost:4000/payments/add';
  constructor(private http: HttpClient) { }
  addBusiness(id,opid,operator,hours,rateperhour,gross,vat,cis,net,dop,comments)
   {
    const obj = {
      id: id,
      opid: opid,
      operator:operator,
      hours:hours,
      rateperhour:rateperhour,
      gross:gross,
      vat:vat,
      cis:cis,
      net:net,
      dop:dop,
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
