import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SimplePage5Service {
  uri = 'http://localhost:4000/addresschangerequest/add';
  constructor(private http: HttpClient) { }
  addBusiness(fullname,designation,location,companyname,previousaddress,currentaddress)
   {
    const obj = {
      fullname: fullname,
      designation: designation,
      location:location,
      companyname:companyname,
      previousaddress:previousaddress,
      currentaddress:currentaddress
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
