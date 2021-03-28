import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

// Módulos de rutas
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  //  path: '/dashboard' PagesRouting
  //  path: '/auth' AuthRouting
  { path: '', redirectTo: "/dashboard", pathMatch: 'full'},

  { path: '**', component: NoPageFoundComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
