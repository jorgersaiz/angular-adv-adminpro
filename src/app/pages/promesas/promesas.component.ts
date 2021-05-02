import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => console.log(usuarios))

    // Tal y como está declarada ahora la promesa, el cuerpo de la misma es síncrono, es decir, se va
    // a ejecutar primero el cuerpo de la promesa y luego el console.log de abajo.
    // const promesa = new Promise(() => {
    //   console.log("Hello world");
      
    // })

    // En este caso, tanto el resolve como el reject sí son asíncronos
    // const promesa = new Promise((resolve, reject) => {
    //   if(false){
    //     resolve("Hello world")
    //   } else {
    //     reject("Algo salió mal")
    //   }
    // })

    // Aquí, podemos capturar lo que devuelve una promesa con then para cuando funciona y con catch
    // para cuando haya algún error.
    // promesa.then(mensaje => {
    //   console.log(mensaje);
      
    // })
    // .catch(error => {console.log("Error en la promesa", error)})

    // De esto, podemos entender que todo lo que devuelve Mongoose, son promesas, y por eso las podemos
    // tratar con then y catch. 
    // console.log("Fin del init");
    
  }

  getUsuarios(): Promise<any>{

    return new Promise( resolve => {

      fetch("https://reqres.in/api/users")
      .then(resp => resp.json()) // Aquí estamos haciendo return de resp.json()
      .then(body => resolve(body.data))
    })
  }

}
