import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  // Cuando ponemos Input, le estamos diciendo a este atributo que puede recibir un valor del padre
  // Si le ponemos un nombre entre los paréntesis le estamos diciendo que en el padre se va a llamar así
  @Input("valor") public progreso: number
  @Input() public btnClass: string = "btn-primary"

  @Output() valorSalida: EventEmitter<number> = new EventEmitter()

  constructor() {
    this.progreso = 50
  }


  public cambio (value){
    this.progreso += value
    this.valorSalida.emit(this.progreso)

    if(this.progreso > 100){
      this.valorSalida.emit(100)
      this.progreso = 100
    } else if(this.progreso < 0){
      this.valorSalida.emit(0)

      this.progreso = 0
    }

  }

  // Este método se va a ejecutar cada vez que cambie el elemento donde se llama. Es decir, puesto que
  // en este caso es un imput bindeado con ngModelChange, cada vez que se escriba algo en el input, 
  // se lanza
  onChange(nuevoValor: number){
    
    if(nuevoValor >= 100){
      this.progreso = 100
    } else if (nuevoValor <= 0){
      this.progreso = 0
    } else {
      this.progreso = nuevoValor
    }

    console.log(this.progreso);
    
    
    this.valorSalida.emit(this.progreso)
  }

  ngOnInit() {

    this.btnClass = `btn ${this.btnClass}`
  }

}
