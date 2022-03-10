import { NgModule } from '@angular/core';

/*Importamos los modulos del router de angular*/
import { RouterModule, Routes } from '@angular/router';

/*Importamos los componentes*/
import { PaisComponent } from './pais/pais.component';
import { PaisCComponent } from './pais-c/pais-c.component';
import { AficionComponent } from './aficion/aficion.component';
import { AficionCComponent } from './aficion-c/aficion-c.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonaCComponent } from './persona-c/persona-c.component';

/*Creamos un array de rutas*/
const routes: Routes = [
  { path: 'pais', component: PaisComponent },
  { path: 'pais-c', component: PaisCComponent },
  { path: 'aficion', component: AficionComponent },
  { path: 'aficion-c', component: AficionCComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'persona-c', component: PersonaCComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }