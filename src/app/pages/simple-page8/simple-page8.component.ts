import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {SimplePage8Service} from '../service/simple-page8.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-simple-page8',
  templateUrl: './simple-page8.component.html',
  styleUrls: ['./simple-page8.component.css']
})
export class SimplePage8Component implements OnInit {
  employeefullname: String;
  workrelateddocument: String;
  personaldocument: String;
  assesments: String;


  ngForm: FormGroup;
  constructor(private fb: FormBuilder,private sps:SimplePage8Service) {this.createForm(); }


  createForm() {
    this.ngForm = this.fb.group({
      
      employeefullname: ['', Validators.required ],
      workrelateddocument: ['', Validators.required ],
      personaldocument: ['', Validators.required ],
      assesments: ['', Validators.required ]
    
    });
  }
  addBusiness() {
  
    

    this.ngForm.value;
    this.employeefullname = this.ngForm.get('employeefullname').value;
    this.workrelateddocument = this.ngForm.get('workrelateddocument').value;
    this.personaldocument = this.ngForm.get('personaldocument').value;
    this.assesments = this.ngForm.get('assesments').value;

   


   
   
    console.log("employeefullname", this.employeefullname)
    console.log("workrelateddocument", this.workrelateddocument)
    console.log("personaldocument", this.personaldocument)
    console.log("assesments", this.assesments)

  
    this.sps.addBusiness(this.employeefullname,this.workrelateddocument,this.personaldocument,this.assesments);
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
