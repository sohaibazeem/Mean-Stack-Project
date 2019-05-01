import { Component, OnInit } from '@angular/core';
import {SimplePage4Service} from '../../../../service/simple-page4.service';
import { Simplepage4 } from '../../../../service/Simple-page4';
@Component({
  selector: 'app-basic-bootstrap4',
  templateUrl: './basic-bootstrap4.component.html',
  styleUrls: ['./basic-bootstrap4.component.css']
})
export class BasicBootstrap4Component implements OnInit {
  businesses: Simplepage4[];

  constructor(private bs: SimplePage4Service) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Simplepage4[]) => {
        this.businesses = data;
    });
  }
}
