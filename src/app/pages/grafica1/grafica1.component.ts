import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {


  public type1 = "doughnut"
  public type2 = "doughnut"
  public type3 = "doughnut"
  public type4 = "doughnut"
  public data1 = [
    [150, 200, 250]
  ]

  public data2 = [
    [5000, 3000, 8500]
  ]

  public data3 = [
    [30, 70, 65]
  ]

  public data4 = [
    [3200, 1600, 6500]
  ]

  public label1 = ["PS5", "XBOX", "PC"]
  

  constructor() { }

  ngOnInit(): void {
  }
}
