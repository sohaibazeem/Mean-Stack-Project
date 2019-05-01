import { Component, OnInit } from '@angular/core';
import {SimplePage5Service} from '../../../../service/simple-page5.service';
import { Simplepage5 } from '../../../../service/Simple-page5';
@Component({
  selector: 'app-basic-bootstrap5',
  templateUrl: './basic-bootstrap5.component.html',
  styleUrls: ['./basic-bootstrap5.component.css']
})
export class BasicBootstrap5Component implements OnInit {
  businesses: Simplepage5[];

  constructor(private bs: SimplePage5Service) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Simplepage5[]) => {
        this.businesses = data;
    });
  }
}
