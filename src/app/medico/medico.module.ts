import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalMedicoComponent } from './pagina-principal-medico/pagina-principal-medico.component';
import { TabsAtenderPacienteComponent } from './tabs-atender-paciente/tabs-atender-paciente.component';
import { TablaCitasPendientesComponent } from './tabla-citas-pendientes/tabla-citas-pendientes.component';
import { TablaCitasRealizadasComponent } from './tabla-citas-realizadas/tabla-citas-realizadas.component';
import { FormularioDiagnosticarComponent } from './formulario-diagnosticar/formulario-diagnosticar.component';
import { FormularioGenerarVolanteComponent } from './formulario-generar-volante/formulario-generar-volante.component';
import { TablaHistorialComponent } from './tabla-historial/tabla-historial.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { GeneralModule } from '../general/general.module';
import { DataTablesModule } from 'angular-datatables';
import { AtenderPacienteComponent } from './atender-paciente/atender-paciente.component';
import { AtenderPacienteMedicoComponent } from './atender-paciente-medico/atender-paciente-medico.component';



@NgModule({
  declarations: [
  
    PaginaPrincipalMedicoComponent,
       TabsAtenderPacienteComponent,
       TablaCitasPendientesComponent,
       TablaCitasRealizadasComponent,
       FormularioDiagnosticarComponent,
       FormularioGenerarVolanteComponent,
       TablaHistorialComponent,
       AtenderPacienteComponent,
       AtenderPacienteMedicoComponent
  ],
  imports: [
    CommonModule,
    GeneralModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DataTablesModule
  ]
})
export class MedicoModule { }
