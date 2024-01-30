import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentePaginaPrincipalRadiologoComponent } from './componente-pagina-principal-radiologo/componente-pagina-principal-radiologo.component';
import { GeneralModule } from '../general/general.module';
import { AppRoutingModule } from '../app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { TablaCitasComponent } from './tabla-citas/tabla-citas.component';
import { AtenderPacienteComponent } from './atender-paciente/atender-paciente.component';
import { FormularioAtenderPacienteComponent } from './formulario-atender-paciente/formulario-atender-paciente.component';
import { FormsModule } from '@angular/forms';
import { TablaCitasRealizadasComponent } from './tabla-citas-realizadas/tabla-citas-realizadas.component';
import { TablaCitasPendientesComponent } from './tabla-citas-pendientes/tabla-citas-pendientes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    ComponentePaginaPrincipalRadiologoComponent,
    TablaCitasComponent,
    AtenderPacienteComponent,
    TablaCitasRealizadasComponent,
    TablaCitasPendientesComponent,
    FormularioAtenderPacienteComponent
  ],
  imports: [
    CommonModule,
    GeneralModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    FontAwesomeModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class RadiologoModule { }
