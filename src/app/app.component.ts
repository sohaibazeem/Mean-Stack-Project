import { Component } from '@angular/core';

import { NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router } from '@angular/router';
@Component({
  selector: 'app-root',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dataSource: Object;
  chartConfig: Object;
  constructor() 
  {
    this.chartConfig =
    {
      width: '700',
      height: '400',
      type: 'column2d',
      dataFormat: 'json'
    }
    this.dataSource = 
    {
     "chart": {
       "caption": "Countries With Most Oil Reserves [2017-18]",
       "subCaption": "In MMbbl = One Million barrels",
       "xAxisName": "Country",
       "yAxisName": "Reserves (MMbbl)",
       "numberSuffix": "K",
       "theme": "fusion",
      },
      "data": [{
       "label": "Venezuela",
       "value": "290"
      }, {
       "label": "Saudi",
       "value": "260"
      }, {
       "label": "Canada",
       "value": "180"
      }, {
       "label": "Iran",
       "value": "140"
      }, {
       "label": "Russia",
       "value": "115"
      }, {
       "label": "UAE",
       "value": "100"
      }, {
       "label": "US",
       "value": "30"
      }, {
       "label": "China",
       "value": "30"
     }]
 };


}
}

