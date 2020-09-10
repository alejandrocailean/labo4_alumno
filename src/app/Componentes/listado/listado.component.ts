import { Component, OnInit, Input } from '@angular/core';
import {Alumno} from '../../clases/alumno';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  //listado:Alumno[]=[];
  @Input() listado:Alumno[];
  titulo='Listado de alumnos';


  constructor() { }

  ngOnInit(): void {
  }

}
