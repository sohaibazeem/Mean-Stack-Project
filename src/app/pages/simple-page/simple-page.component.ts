import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {SimplePageService} from '../service/simple-page.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-simple-page',
  templateUrl: './simple-page.component.html',
  styleUrls: ['./simple-page.component.css']
})
export class SimplePageComponent implements OnInit {
  id: String;
  opid: String;
  weeknumber: String;
  operator: String;
  sat: String;
  sun: String;
  mon: String;
  tue: String;
  wed: String;
  thu: String;
  fri: String;
  total: String;
  comments: String;

  ngForm: FormGroup;
  constructor(private fb: FormBuilder,private sps:SimplePageService) {this.createForm(); }


  createForm() {
    this.ngForm = this.fb.group({
      
      id: ['', Validators.required ],
      opid: ['', Validators.required ],
      weeknumber: ['', Validators.required ],
      operator: ['', Validators.required ],
      sat: ['', Validators.required ],
      sun: ['', Validators.required ],
      mon: ['', Validators.required ],
      tue: ['', Validators.required ],
      wed: ['', Validators.required ],
      thu: ['', Validators.required ],
      fri: ['', Validators.required ],
      total: ['', Validators.required ],
      comments: ['', Validators.required ],

    
    });
  }
  addBusiness() {
    
    this.ngForm.value;
    this.id = this.ngForm.get('id').value;
    this.opid = this.ngForm.get('opid').value;
    this.weeknumber = this.ngForm.get('weeknumber').value;
    this.operator = this.ngForm.get('operator').value;

    this.sat = this.ngForm.get('sat').value;
    this.sun = this.ngForm.get('sun').value;
    this.mon = this.ngForm.get('mon').value;
    this.tue = this.ngForm.get('tue').value;
    this.wed = this.ngForm.get('wed').value;
    this.thu = this.ngForm.get('thu').value;
    this.fri = this.ngForm.get('fri').value;
    this.total = this.ngForm.get('total').value;
    this.comments = this.ngForm.get('comments').value;


   
   
    console.log("id", this.id)
    console.log("opid", this.opid)
    console.log("weeknumber", this.weeknumber)
    console.log("operator", this.operator)
    console.log("sat", this.sat)
    console.log("sun", this.sun)

    console.log("mon", this.mon)
    console.log("tue", this.tue)
    console.log("wed", this.wed)
    console.log("thu", this.thu)
    console.log("fri", this.fri)
    console.log("total", this.total)
    console.log("comments", this.comments)
  
    this.sps.addBusiness(this.id,this.opid,this.weeknumber,this.operator,this.sat,this.sun,this.mon,this.tue,this.wed,this.thu,this.fri,this.total,this.comments);
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
