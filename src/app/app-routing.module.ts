import { NgModule } from '@angular/core';

/*Importamos los modulos del router de angular*/
import { RouterModule, Routes } from '@angular/router';

/*Importamos los componentes*/
import { PaisComponent } from './pais/pais.component';
import { PaisCComponent } from './pais-c/pais-c.component';

/*Creamos un array de rutas*/
const routes: Routes = [
  { path: 'pais', component: PaisComponent },
  { path: 'pais-c', component: PaisCComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }