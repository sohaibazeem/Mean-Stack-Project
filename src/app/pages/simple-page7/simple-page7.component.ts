import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {SimplePage7Service} from '../service/simple-page7.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-simple-page7',
  templateUrl: './simple-page7.component.html',
  styleUrls: ['./simple-page7.component.css']
})
export class SimplePage7Component implements OnInit {
  customerid: String;
  companyname: String;
  contactname: String;
  address1: String;
  address2: String;
  city: String;
  country: String;
  country1: String;
  postcode: String;
  mobiletelephone: String;
  officetelephone: String;
  emailaddress: String;
  fax: String;
  vatnumber: String;

  ngForm: FormGroup;
  constructor(private fb: FormBuilder,private sps:SimplePage7Service) {this.createForm(); }


  createForm() {
    this.ngForm = this.fb.group({
      
      customerid: ['', Validators.required ],
      companyname: ['', Validators.required ],
      contactname: ['', Validators.required ],
      address1: ['', Validators.required ],
      address2: ['', Validators.required ],
      city: ['', Validators.required ],
      country: ['', Validators.required ],
      country1: ['', Validators.required ],

      postcode: ['', Validators.required ],
      mobiletelephone: ['', Validators.required ],
      officetelephone: ['', Validators.required ],
      emailaddress: ['', Validators.required ],
      fax: ['', Validators.required ],
      vatnumber: ['', Validators.required ]
    
    });
  }
  addBusiness() {
    
    this.ngForm.value;
    this.customerid = this.ngForm.get('customerid').value;
    this.companyname = this.ngForm.get('companyname').value;
    this.contactname = this.ngForm.get('contactname').value;
    this.address1 = this.ngForm.get('address1').value;
    this.address2 = this.ngForm.get('address2').value;
    this.city = this.ngForm.get('city').value;
    this.country = this.ngForm.get('country').value;
    this.country1 = this.ngForm.get('country1').value;

    this.postcode = this.ngForm.get('postcode').value;
    this.mobiletelephone = this.ngForm.get('mobiletelephone').value;
    this.officetelephone = this.ngForm.get('officetelephone').value;
    this.emailaddress = this.ngForm.get('emailaddress').value;

    this.fax = this.ngForm.get('fax').value;
    this.vatnumber = this.ngForm.get('vatnumber').value;
   


   
   
    console.log("employeeid", this.customerid)
    console.log("employeename", this.companyname)
    console.log("contactname", this.contactname)
    console.log("address1", this.address1)
    console.log("address2", this.address2)
    console.log("city", this.city)
    console.log("country", this.country)

    console.log("country1", this.country1)
    console.log("postcode", this.postcode)
    console.log("mobiletelephone", this.mobiletelephone)
    console.log("officetelephone", this.officetelephone)
    console.log("emailaddress", this.emailaddress)
    console.log("fax", this.fax)
    console.log("vatnumber", this.vatnumber)
  
    this.sps.addBusiness(this.customerid,this.companyname,this.companyname,this.address1,this.address2,this.city,this.country,this.country1,this.postcode,this.mobiletelephone,this.officetelephone,this.emailaddress,this.fax,this.vatnumber);
    this.ngForm.reset();

    swal({
      title: "Add sucessfully!",
      text: "Click Ok to confirm!",
      icon: "success",
      //button: "Aww yiss!",
    });
  
  }

  ngOnInit() {
  }

}
