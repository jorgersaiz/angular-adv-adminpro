import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const routes: Routes = [

    { 
        // Con esto primero, estamos indicando que todas estas rutas van a empezar por dashboard, por lo que
        // si queremos ir a progress, será dashboard/progress
        path: 'dashboard', 
        component: PagesComponent,
        children: [
          // En principio, estas serán rutas protegidas, es decir, solo se puede acceder una vez logueado
          { path: '', component: DashboardComponent},  
          { path: 'progress', component: ProgressComponent},
          { path: 'grafica1', component: Grafica1Component}
    
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
