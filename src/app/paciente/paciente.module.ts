import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralModule } from '../general/general.module';
import { AppRoutingModule } from '../app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { TablaCitasPacientePendientesComponent } from './tabla-citas-paciente-pendientes/tabla-citas-paciente-pendientes.component';
import { TablaCitasPacienteRealizadasComponent } from './tabla-citas-paciente-realizadas/tabla-citas-paciente-realizadas.component';
import { TablaCitasPacientePruebasComponent } from './tabla-citas-paciente-pruebas/tabla-citas-paciente-pruebas.component';
import { CitasPacienteDetallesComponent } from './citas-paciente-detalles/citas-paciente-detalles.component';
import { CitasPacienteEspecificacionesComponent } from './citas-paciente-especificaciones/citas-paciente-especificaciones.component';
import { PaginaPrincipalPacienteComponent } from './pagina-principal-paciente/pagina-principal-paciente.component';
import { PaginaCitaPacientesRealizadasComponent } from './pagina-cita-pacientes-realizadas/pagina-cita-pacientes-realizadas.component';
import { PaginaCitaPruebasComponent } from './pagina-cita-pruebas/pagina-cita-pruebas.component';



@NgModule({
  declarations: [
    TablaCitasPacientePendientesComponent,
    TablaCitasPacienteRealizadasComponent,
    TablaCitasPacientePruebasComponent,
    CitasPacienteDetallesComponent,
    CitasPacienteEspecificacionesComponent,
    PaginaPrincipalPacienteComponent,
    PaginaCitaPacientesRealizadasComponent,
    PaginaCitaPruebasComponent
  ],
  imports: [
    CommonModule,
    GeneralModule,
    AppRoutingModule,
    DataTablesModule
  ]
})
export class PacienteModule { }
