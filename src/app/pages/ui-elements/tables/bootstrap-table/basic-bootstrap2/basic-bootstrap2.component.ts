import { Component, OnInit } from '@angular/core';
import {SimplePage2Service} from '../../../../service/simple-page2.service';
import { Simplepage2 } from '../../../../service/Simple-page2';
@Component({
  selector: 'app-basic-bootstrap2',
  templateUrl: './basic-bootstrap2.component.html',
  styleUrls: ['./basic-bootstrap2.component.css']
})
export class BasicBootstrap2Component implements OnInit {
  businesses: Simplepage2[];

  constructor(private bs: SimplePage2Service) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Simplepage2[]) => {
        this.businesses = data;
    });
  }
}
