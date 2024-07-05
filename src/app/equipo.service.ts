import { Injectable } from '@angular/core';

@Injectable()
export class EquipoService{

  equipo:any[]=[
    {
      nombre:'Aprendizdev',
      especialidad:'Python',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing'
  
    },
    {
      nombre:'Maria',
      especialidad:'CSS',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing'
  
    }
  ]

  constructor(){
    console.log('funcionando servicio')
  }

  obtenerEquipo(){
   return this.equipo;
  }

  obtenerUno(i:any){
    return this.equipo[i];
  }

}

