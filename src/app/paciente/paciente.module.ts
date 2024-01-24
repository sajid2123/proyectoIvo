import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPacienteComponent } from './tabla-paciente/tabla-paciente.component';
import { GeneralModule } from '../general/general.module';
import { AppRoutingModule } from '../app-routing.module';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    TablaPacienteComponent
  ],
  imports: [
    CommonModule,
    GeneralModule,
    AppRoutingModule,
    DataTablesModule
  ]
})
export class PacienteModule { }
