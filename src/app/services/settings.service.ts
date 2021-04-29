import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public element = document.querySelector("#theme")
  public elements = document.querySelectorAll(".selector")

  constructor() { 
    let local = localStorage.getItem('theme') || "./assets/css/colors/default-dark.css"
    this.element.setAttribute("href", local)
    
  }

  changeColor(color: string){

    const url = `./assets/css/colors/${color}.css`

    this.element.setAttribute("href", url)

    localStorage.setItem('theme', url)
    
    // Aquí lo que hacemos de recoger toda la lista de colores en el atributo de arriba (this.elements)
    // y solo accedemos al dom una vez, cuando carga el componente. Después de eso, solamente usamos
    // el array de colores para hacer la comprobación, pero no volvemos a acceder al dom, mejorando
    // así el rendimiento.
    this.elements.forEach(elem =>{
      elem.classList.remove("working")

      if (elem.classList.contains(`${color}-theme`)){
        elem.classList.add('working')
      }
      
    })
    
  }
}
