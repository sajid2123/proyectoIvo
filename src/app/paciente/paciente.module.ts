import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { TablaPacienteComponent } from './tabla-paciente/tabla-paciente.component';
=======
import { TablaCitasPacientesComponent } from './tabla-citas-pacientes/tabla-citas-pacientes.component';
>>>>>>> esteban
import { GeneralModule } from '../general/general.module';
import { AppRoutingModule } from '../app-routing.module';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
<<<<<<< HEAD
    TablaPacienteComponent
=======
    TablaCitasPacientesComponent,
    TablaCitasPacientesComponent
>>>>>>> esteban
  ],
  imports: [
    CommonModule,
    GeneralModule,
    AppRoutingModule,
    DataTablesModule
  ]
})
export class PacienteModule { }
