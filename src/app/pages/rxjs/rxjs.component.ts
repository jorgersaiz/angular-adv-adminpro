import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs : Subscription
  constructor() { 


    // Con todo esto, podemos decir que un observable es un objeto que va a emitir información y que 
    // además, va a permitir que esa información se recoja. El que va a recoger la información es el 
    // observador (observer), que a través de sus métodos, va a poder emitirla o directamente cortarla.
    

    // Aquí nos estamos suscribiendo al observable, es decir, estamos escuchando lo que envía el observer
    // Además, desde aquí podemos recoger todas las posibles respuestas del mismo. En primer lugar, 
    // recogemos cuando funciona, segundo, recogemos el error, y tercer, recogemos cuando se complete.
    // En este caso, el pipe sirve para utilizar la información del observable de otra forma

    // ¿Qué hace el retry? En este caso, tal y como habíamos puesto el condicional, lo que ocurría es 
    // que cuando llegaba a 2, saltaba el error, pero en vez de ir directo al subscribe del error, salta
    // al retry primero. El retry, es lo primero que se activa siempre que hay un error, y lo que hace
    // es que vuelve a lanzar el observable de nuevo. Puesto que estaba en i == 2, si vuelve a ejecutarlo
    // i pasa a valer 3 y esta vez no da error, por lo que termina llegando al complete.
    // this.retornaObservable()
    // .pipe(
    //   retry() // A retry, le podemos pasar un número para decirle cuántas veces queremos que se lance
    // )
    // .subscribe( 
    //   valor => console.log("Subs", valor),
    //   error => console.log("Error", error),
    //   () => console.info("Obs terminado")
      
    // )

    this.intervalSubs = this.retornaIntervalo()
    .subscribe(
      valor => console.log(valor),
      error => console.error("Error", error)
      
      
    )
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe()
  }

  // Si no nos sucribimos al observable, el observable ni siquiera se ejecuta, si sabe que nadie le va a
  // escuchar, no llega a hacer ese esfuerzo.

  

  retornaObservable(){

    let i = 0

    const obs$ = new Observable <number>( observer => {

      const intervalo = setInterval( () => {

        i++
        observer.next(i);

        if ( i == 4 ){
          clearInterval( intervalo )
          observer.complete()
        }

        if ( i == 2 ){
          observer.error("i llegó al valor de 2")
        }
        
      }, 1000)
    })

    return obs$
  }

  
  retornaIntervalo(){
    return interval(500)
    .pipe(
      // take(20), // Este take, lo que hace es coger solo los 4 primeros valores que emita el observable
      map( valor => {
        return valor + 1 // El map sirve para transformar los valores que vamos a recibir. En este caso
                         // lo que hace es sumarle uno a cada valor, y esos valores ya transformados son
                         //  los que vamos a recibir
      }),
      filter(valor => valor % 2 == 0)
      
    )
  }
}
