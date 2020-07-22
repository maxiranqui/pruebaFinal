import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TablaViajesComponent} from './tabla-viajes/tabla-viajes.component';
import {FormulariosViajesComponent} from './formularios-viajes/formularios-viajes.component';
const routes: Routes = [
{path: 'formulario-viajes-component', component: FormulariosViajesComponent },
{path: 'tabla-viajes-component', component: TablaViajesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
