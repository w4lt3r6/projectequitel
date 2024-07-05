import {RouterModule, Routes} from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

//servicios
import {EquipoService } from './equipo.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { Cuerpo2Component } from './cuerpo2/cuerpo2.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes:Routes =[
  {path:'contacto',component:ContactoComponent},
  {path:'equipo/:id',component:EquipoComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'',component:InicioComponent,pathMatch:'full'},
  {path:'**',redirectTo: 'nosotros',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    CuerpoComponent,
    Cuerpo2Component,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [EquipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
