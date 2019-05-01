import { Component, OnInit } from '@angular/core';
import {SimplePage1Service} from '../../../../service/simple-page1.service';
import { Simplepage1 } from '../../../../service/Simple-page1';
@Component({
  selector: 'app-basic-bootstrap1',
  templateUrl: './basic-bootstrap1.component.html',
  styleUrls: ['./basic-bootstrap1.component.css']
})
export class BasicBootstrap1Component implements OnInit {
  businesses: Simplepage1[];

  constructor(private bs: SimplePage1Service) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Simplepage1[]) => {
        this.businesses = data;
    });
  }
}
