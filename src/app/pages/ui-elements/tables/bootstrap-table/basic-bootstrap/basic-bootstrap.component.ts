import { Component, OnInit } from '@angular/core';
import {SimplePageService} from '../../../../service/simple-page.service';
import {Simplepage} from '../../../../service/Simple-page';
@Component({
  selector: 'app-basic-bootstrap',
  templateUrl: './basic-bootstrap.component.html',
  styleUrls: ['./basic-bootstrap.component.css']
})
export class BasicBootstrapComponent implements OnInit {
  businesses: Simplepage[];

  constructor(private bs: SimplePageService) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Simplepage[]) => {
        this.businesses = data;
    });
  }
}
