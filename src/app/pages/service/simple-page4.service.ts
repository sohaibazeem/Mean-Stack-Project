import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SimplePage4Service {

  uri = 'http://localhost:4000/projectdetails/add';
  constructor(private http: HttpClient) { }
  addBusiness(projectid,projectname,location,customer,startdate,notes,ongoing)
   {
    const obj = {
      projectid: projectid,
      projectname: projectname,
      location:location,
      customer:customer,
      startdate:startdate,
      notes:notes,
      ongoing:ongoing
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
