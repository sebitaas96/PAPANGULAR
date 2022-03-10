import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisCComponent } from './pais-c/pais-c.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisComponent } from './pais/pais.component';
import { AficionCComponent } from './aficion-c/aficion-c.component';
import { AficionComponent } from './aficion/aficion.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonaCComponent } from './persona-c/persona-c.component';


@NgModule({
  declarations: [
    AppComponent,
    PaisCComponent,
    PaisComponent,
    AficionCComponent,
    AficionComponent,
    PersonaComponent,
    PersonaCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
