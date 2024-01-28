import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentePaginaPrincipalRadiologoComponent } from './componente-pagina-principal-radiologo/componente-pagina-principal-radiologo.component';
import { GeneralModule } from '../general/general.module';
import { ComponentePendienteRealizadaComponent } from '../general/componente-pendiente-realizada/componente-pendiente-realizada.component';
import { ComponenetePaginaCitaRealizadasComponent } from './componenete-pagina-cita-realizadas/componenete-pagina-cita-realizadas.component';
import { AppRoutingModule } from '../app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { TablaCitasComponent } from './tabla-citas/tabla-citas.component';
import { AtenderPacienteComponent } from './atender-paciente/atender-paciente.component';
import { BreadcrumbAtenderPacienteComponent } from './breadcrumb-atender-paciente/breadcrumb-atender-paciente.component';
import { FormularioAtenderPacienteComponent } from './formulario-atender-paciente/formulario-atender-paciente.component';
import { FormsModule } from '@angular/forms';
import { TablaCitasRealizadasComponent } from './tabla-citas-realizadas/tabla-citas-realizadas.component';
import { TablaCitasPendientesComponent } from './tabla-citas-pendientes/tabla-citas-pendientes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ComponentePaginaPrincipalRadiologoComponent,
    ComponenetePaginaCitaRealizadasComponent,
    TablaCitasComponent,
    AtenderPacienteComponent,
    BreadcrumbAtenderPacienteComponent,
    TablaCitasRealizadasComponent,
    TablaCitasPendientesComponent,
    FormularioAtenderPacienteComponent,
    
  ],
  imports: [
    CommonModule,
    GeneralModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class RadiologoModule { }
