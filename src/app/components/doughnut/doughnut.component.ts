import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnInit {

  @Input() public title = "Sin titulo"
  @Input("labels") public doughnutChartLabels: Label[] = ['data1', 'data2', 'data3'];
  @Input("data") public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  @Input("type") public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    {backgroundColor: ['#6857E6', '#009FEE', '#F02059']}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
