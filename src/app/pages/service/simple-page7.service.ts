import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SimplePage7Service {
  uri = 'http://localhost:4000/customerdetails/add';
  constructor(private http: HttpClient) { }
  addBusiness(customerid,companyname,contactname,address1,address2,city,country,country1,postcode,mobiletelephone,officetelephone,emailaddress,fax,vatnumber)
   {
    const obj = {
      customerid: customerid,
      companyname: companyname,
      contactname:contactname,
      address1:address1,
      address2:address2,
      city:city,
      country:country,
      country1: country1,
      postcode:postcode,
      mobiletelephone:mobiletelephone,
      officetelephone:officetelephone,
      emailaddress:emailaddress,
      fax:fax,
      vatnumber:vatnumber

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
