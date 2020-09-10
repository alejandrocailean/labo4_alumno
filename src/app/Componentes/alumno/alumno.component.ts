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
  muestroCargarB:boolean=false;
  muestroListarB:boolean=false;
  
  constructor() {
    
  }

  ngOnInit(): void {console.log(this.muestroCargarB);
  }  

 
public locura(e){
  console.log(e);
  this.listaAlumnos.push(e);
}
public muestroCargar(){
  this.muestroCargarB=true;
  this.muestroListarB=false;
  console.log(this.muestroCargarB);
}
public muestroListar(){
  this.muestroCargarB=false;
  this.muestroListarB=true;
}
  

}
