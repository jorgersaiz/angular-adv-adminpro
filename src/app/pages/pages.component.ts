import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions()
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  

  // Creando este atributo privado, lo que estoy haciendo es inyectar el servicio de settings en este 
  // componente. Esto lo que hace es que cuando cargue pages, va a cargar también el servicio
  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {

    customInitFunctions()
    
  }

}
