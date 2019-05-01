import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {SimplePage4Service} from '../service/simple-page4.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-simple-page4',
  templateUrl: './simple-page4.component.html',
  styleUrls: ['./simple-page4.component.css']
})
export class SimplePage4Component implements OnInit {
  projectid: String;
  projectname: String;
  location: String;
  customer: String;
  startdate: String;
  notes: String;
  ongoing: String;

  ngForm: FormGroup;
  constructor(private fb: FormBuilder,private sps:SimplePage4Service) {this.createForm(); }


  createForm() {
    this.ngForm = this.fb.group({
      
      projectid: ['', Validators.required ],
      projectname: ['', Validators.required ],
      location: ['', Validators.required ],
      customer: ['', Validators.required ],
      startdate: ['', Validators.required ],
      notes: ['', Validators.required ],
      ongoing: ['', Validators.required ]
    
    });
  }
  addBusiness() {
    
    this.ngForm.value;
    this.projectid = this.ngForm.get('projectid').value;
    this.projectname = this.ngForm.get('projectname').value;
    this.location = this.ngForm.get('location').value;

    this.customer = this.ngForm.get('customer').value;
    this.startdate = this.ngForm.get('startdate').value;
    this.notes = this.ngForm.get('notes').value;
    this.ongoing = this.ngForm.get('ongoing').value;


   
   
    console.log("projectid", this.projectid)
    console.log("projectname", this.projectname)
    console.log("location", this.location)
    console.log("customer", this.customer)
    console.log("startdate", this.startdate)

    console.log("notes", this.notes)
    console.log("ongoing", this.ongoing)
  
   
    this.sps.addBusiness(this.projectid,this.projectname,this.location,this.customer,this.startdate,this.notes,this.ongoing);
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
