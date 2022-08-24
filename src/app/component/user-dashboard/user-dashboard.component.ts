import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  chart:Chart;

  constructor() {
    this.chart=new Chart({});
   }

  ngOnInit(): void {

    this.init()

    // const xValues = ["January", "February", "march", "April", "May","June"];
    //     const yValues = [5000, 12000, 16500, 18700,35500,45000 ];
    //     const barColors = ["blue", "blue","blue","blue","blue","blue"];
  }
init(){

  this.chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'User Working'
    },
    credits: {
      enabled: true
    },
    series: [
      {
        name: 'Line 1',
        type: 'area',
        data: [1, 2, 3,4,5,6,7]
      }
    ]
  });

}

}
