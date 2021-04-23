import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'
  ]
})
export class ProgressComponent implements OnInit {

  progreso1: number = 50
  progreso2: number = 90
  btn: string = "btn btn-info"



  getPro1 (){
    return `${this.progreso1}%`
  }
  getPro2 (){
    return `${this.progreso2}%`
  }

  ngOnInit(): void {
  }

}
