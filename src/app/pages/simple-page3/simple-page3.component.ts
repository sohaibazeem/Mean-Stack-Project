import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {SimplePage3Service} from '../service/simple-page3.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-simple-page3',
  templateUrl: './simple-page3.component.html',
  styleUrls: ['./simple-page3.component.css']
})
export class SimplePage3Component implements OnInit {
  id: String;
    opid: String;
    operator: String;
    hours: String;
    rateperhour: String;
    gross: String;
    vat: String;
    cis: String;
    net: String;
    dop: String;
    comments: String;

  ngForm: FormGroup;
  constructor(private fb: FormBuilder,private sps:SimplePage3Service) {this.createForm(); }


  createForm() {
    this.ngForm = this.fb.group({
      
      id: ['', Validators.required ],
      opid: ['', Validators.required ],
      operator: ['', Validators.required ],
      hours: ['', Validators.required ],
      rateperhour: ['', Validators.required ],
      gross: ['', Validators.required ],
      vat: ['', Validators.required ],
      cis: ['', Validators.required ],
      net: ['', Validators.required ],
      dop: ['', Validators.required ],
      comments: ['', Validators.required ],

    
    });
  }
  addBusiness() {
    
    this.ngForm.value;
    this.id = this.ngForm.get('id').value;
    this.opid = this.ngForm.get('opid').value;
    this.operator = this.ngForm.get('operator').value;

    this.hours = this.ngForm.get('hours').value;
    this.rateperhour = this.ngForm.get('rateperhour').value;
    this.gross = this.ngForm.get('gross').value;
    this.vat = this.ngForm.get('vat').value;
    this.cis = this.ngForm.get('cis').value;
    this.net = this.ngForm.get('net').value;
    this.dop = this.ngForm.get('dop').value;
    this.comments = this.ngForm.get('comments').value;


   
   
    console.log("id", this.id)
    console.log("opid", this.opid)
    console.log("operator", this.operator)
    console.log("hours", this.hours)
    console.log("rateperhour", this.rateperhour)

    console.log("gross", this.gross)
    console.log("vat", this.vat)
    console.log("cis", this.cis)
    console.log("net", this.net)
    console.log("dop", this.dop)
    console.log("comments", this.comments)
  
    this.sps.addBusiness(this.id,this.opid,this.operator,this.hours,this.rateperhour,this.gross,this.vat,this.cis,this.net,this.dop,this.comments);
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
