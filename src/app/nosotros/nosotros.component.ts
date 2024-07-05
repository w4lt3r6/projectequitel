import { Component, OnInit } from '@angular/core';
import{ EquipoService } from './../equipo.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

  equipo:any[]= [];

  constructor(private _servicio:EquipoService){
    this.equipo=_servicio.obtenerEquipo();
  }


}
