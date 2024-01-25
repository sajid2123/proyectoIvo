import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../general/general.module';
import { AppRoutingModule } from '../app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { TablaPacienteComponent } from './tabla-paciente/tabla-paciente.component';



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
