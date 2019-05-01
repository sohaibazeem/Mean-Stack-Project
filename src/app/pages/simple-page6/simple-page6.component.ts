import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {SimplePage6Service} from '../service/simple-page6.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-simple-page6',
  templateUrl: './simple-page6.component.html',
  styleUrls: ['./simple-page6.component.css']
})
export class SimplePage6Component implements OnInit {
  employeeid: String;
  employeename: String;
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
  constructor(private fb: FormBuilder,private sps:SimplePage6Service) {this.createForm(); }


  createForm() {
    this.ngForm = this.fb.group({
      
      employeeid: ['', Validators.required ],
      employeename: ['', Validators.required ],
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
    this.employeeid = this.ngForm.get('employeeid').value;
    this.employeename = this.ngForm.get('employeename').value;
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
   


   
   
    console.log("employeeid", this.employeeid)
    console.log("employeename", this.employeename)
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
  
    this.sps.addBusiness(this.employeeid,this.employeename,this.address1,this.address2,this.city,this.country,this.country1,this.postcode,this.mobiletelephone,this.officetelephone,this.emailaddress,this.fax,this.vatnumber);
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
