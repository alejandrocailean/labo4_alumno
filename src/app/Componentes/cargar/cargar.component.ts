import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {AlumnoComponent} from '../alumno/alumno.component';
import {Alumno} from '../../clases/alumno';

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent implements OnInit {

  titulo ='Cargar un alumno';
  nombre;
  apellido;
  legajo;
  materias;

  @Output() alumnos= new EventEmitter<Alumno>();

  constructor() { }

  ngOnInit(): void {
  }

  public Cargar(e) {
    //console.log(e);
    const alumno =new Alumno(this.nombre,this.apellido,this.legajo,this.materias);
    this.alumnos.emit(alumno);
    
  }

}
