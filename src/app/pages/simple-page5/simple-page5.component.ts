import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {SimplePage5Service} from '../service/simple-page5.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-simple-page5',
  templateUrl: './simple-page5.component.html',
  styleUrls: ['./simple-page5.component.css']
})
export class SimplePage5Component implements OnInit {
  fullname: String;
  designation: String;
  location: String;
  companyname: String;
  previousaddress: String;
  currentaddress: String;

  ngForm: FormGroup;
  constructor(private fb: FormBuilder,private sps:SimplePage5Service) {this.createForm(); }


  createForm() {
    this.ngForm = this.fb.group({
      
      fullname: ['', Validators.required ],
      designation: ['', Validators.required ],
      location: ['', Validators.required ],
      companyname: ['', Validators.required ],
      previousaddress: ['', Validators.required ],
      currentaddress: ['', Validators.required ]
    
    });
  }
  addBusiness() {
    
    this.ngForm.value;
    this.fullname = this.ngForm.get('fullname').value;
    this.designation = this.ngForm.get('designation').value;
    this.location = this.ngForm.get('location').value;
    this.companyname = this.ngForm.get('companyname').value;
    this.previousaddress = this.ngForm.get('previousaddress').value;
    this.currentaddress = this.ngForm.get('currentaddress').value;
   


   
   
    console.log("fullname", this.fullname)
    console.log("designation", this.designation)
    console.log("location", this.location)
    console.log("companyname", this.companyname)
    console.log("previousaddress", this.previousaddress)
    console.log("currentaddress", this.currentaddress)
  
    this.sps.addBusiness(this.fullname,this.designation,this.location,this.companyname,this.previousaddress,this.currentaddress);
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
