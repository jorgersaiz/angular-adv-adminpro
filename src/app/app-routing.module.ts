import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';


// Aquí ponemos las rutas de nuestra aplicación
const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    children: [
      // En principio, estas serán rutas protegidas, es decir, solo se puede acceder una vez logueado
      { path: 'dashboard', component: DashboardComponent},  
      { path: 'progress', component: ProgressComponent},
      { path: 'grafica1', component: Grafica1Component},
      { path: '', redirectTo: "/dashboard", pathMatch: 'full'},
      // Lo que aquí está ocurriendo es que si no ponemos ninguna ruta en la url, se va a pagesComponent,
      // luego intenta buscar rutas en los hijos de pages y si no encuentra, redirige a dashboard

    ] 
  },
  // Estas van a ser nuestras rutas públicas, es decir, se puede acceder sin estar logueado
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  
  { path: '**', component: NoPageFoundComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
