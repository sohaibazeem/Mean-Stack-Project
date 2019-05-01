import { Component, OnInit } from '@angular/core';
import {SimplePage6Service} from '../../../../service/simple-page6.service';
import { Simplepage6 } from '../../../../service/Simple-page6';
@Component({
  selector: 'app-basic-bootstrap6',
  templateUrl: './basic-bootstrap6.component.html',
  styleUrls: ['./basic-bootstrap6.component.css']
})
export class BasicBootstrap6Component implements OnInit {
  businesses: Simplepage6[];

  constructor(private bs: SimplePage6Service) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Simplepage6[]) => {
        this.businesses = data;
    });
  }
}
