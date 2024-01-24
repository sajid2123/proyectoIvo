import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaCitasPacientesComponent } from './tabla-citas-pacientes/tabla-citas-pacientes.component';
import { GeneralModule } from '../general/general.module';
import { AppRoutingModule } from '../app-routing.module';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    TablaCitasPacientesComponent,
    TablaCitasPacientesComponent
  ],
  imports: [
    CommonModule,
    GeneralModule,
    AppRoutingModule,
    DataTablesModule
  ]
})
export class PacienteModule { }
