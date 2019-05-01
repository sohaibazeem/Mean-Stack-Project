import { Component, OnInit } from '@angular/core';
import {SimplePage7Service} from '../../../../service/simple-page7.service';
import { Simplepage7 } from '../../../../service/Simple-page7';
@Component({
  selector: 'app-basic-bootstrap7',
  templateUrl: './basic-bootstrap7.component.html',
  styleUrls: ['./basic-bootstrap7.component.css']
})
export class BasicBootstrap7Component implements OnInit {
  businesses: Simplepage7[];

  constructor(private bs: SimplePage7Service) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Simplepage7[]) => {
        this.businesses = data;
    });
  }
}
