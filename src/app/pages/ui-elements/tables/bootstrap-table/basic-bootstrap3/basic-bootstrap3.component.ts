import { Component, OnInit } from '@angular/core';
import {SimplePage3Service} from '../../../../service/simple-page3.service';
import { Simplepage3 } from '../../../../service/Simple-page3';
@Component({
  selector: 'app-basic-bootstrap3',
  templateUrl: './basic-bootstrap3.component.html',
  styleUrls: ['./basic-bootstrap3.component.css']
})
export class BasicBootstrap3Component implements OnInit {
  businesses: Simplepage3[];

  constructor(private bs: SimplePage3Service) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Simplepage3[]) => {
        this.businesses = data;
    });
  }
}
