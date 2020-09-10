import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { AlumnoComponent } from './Componentes/alumno/alumno.component';
import { CargarComponent } from './Componentes/cargar/cargar.component';
import { ListadoComponent } from './Componentes/listado/listado.component'

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    CargarComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
