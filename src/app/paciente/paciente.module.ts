import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralModule } from '../general/general.module';
import { AppRoutingModule } from '../app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { TablaCitasPacientePendientesComponent } from './tabla-citas-paciente-pendientes/tabla-citas-paciente-pendientes.component';
import { TablaCitasPacientePruebasComponent } from './tabla-citas-paciente-pruebas/tabla-citas-paciente-pruebas.component';
import { CitasPacienteDetallesComponent } from './citas-paciente-detalles/citas-paciente-detalles.component';
import { CitasPacienteEspecificacionesComponent } from './citas-paciente-especificaciones/citas-paciente-especificaciones.component';
import { PaginaPrincipalPacienteComponent } from './pagina-principal-paciente/pagina-principal-paciente.component';
import { PaginaCitaPruebasComponent } from './pagina-cita-pruebas/pagina-cita-pruebas.component';
import { RouterModule } from '@angular/router';
import { PasarDatosService } from './pasar-datos.service';

@NgModule({
  declarations: [
    TablaCitasPacientePendientesComponent,
    TablaCitasPacientePruebasComponent,
    CitasPacienteDetallesComponent,
    CitasPacienteEspecificacionesComponent,
    PaginaPrincipalPacienteComponent,
    PaginaCitaPruebasComponent,

  ],
  imports: [
    CommonModule,
    GeneralModule,
    AppRoutingModule,
    DataTablesModule,
    RouterModule
  ],
  providers: [PasarDatosService]
})
export class PacienteModule { }
