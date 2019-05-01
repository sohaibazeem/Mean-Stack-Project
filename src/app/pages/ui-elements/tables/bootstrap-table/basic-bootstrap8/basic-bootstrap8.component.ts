import { Component, OnInit } from '@angular/core';
import {SimplePage8Service} from '../../../../service/simple-page8.service';
import { Simplepage8 } from '../../../../service/Simple-page8';
@Component({
  selector: 'app-basic-bootstrap8',
  templateUrl: './basic-bootstrap8.component.html',
  styleUrls: ['./basic-bootstrap8.component.css']
})
export class BasicBootstrap8Component implements OnInit {
  businesses: Simplepage8[];

  constructor(private bs: SimplePage8Service) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Simplepage8[]) => {
        this.businesses = data;
    });
  }
}
