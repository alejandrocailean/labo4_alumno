import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Alumno} from '../../clases/alumno'


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})


export class AlumnoComponent implements OnInit {

  //alumno=new Alumno('','',0,'');

  listaAlumnos:Alumno[]=[];
  
  constructor() {
    
  }

  ngOnInit(): void {
  }  

 
public locura(e){
  console.log(e);
  this.listaAlumnos.push(e);
}
  

}
