import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [

    { 
        // Con esto primero, estamos indicando que todas estas rutas van a empezar por dashboard, por lo que
        // si queremos ir a progress, será dashboard/progress
        path: 'dashboard', 
        component: PagesComponent,
        children: [
          // En principio, estas serán rutas protegidas, es decir, solo se puede acceder una vez logueado
          { path: '', component: DashboardComponent, data: {titulo : "Dashboard"}},  
          { path: 'progress', component: ProgressComponent, data: {titulo : "Progress"}},
          { path: 'grafica1', component: Grafica1Component, data: {titulo : "Grafica"}},
          { path: 'account-settings', component: AccountSettingsComponent, data: {titulo : "Account-Settings"}},
          { path: 'promesas', component: PromesasComponent, data: {titulo : "Promesas"}},
          { path: 'rxjs', component: RxjsComponent, data: {titulo : "Observables"}}
    
        ] 
    },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

// Acordarse de cambiar nombre de la clase de abajo
export class PagesRoutingModule {} 
