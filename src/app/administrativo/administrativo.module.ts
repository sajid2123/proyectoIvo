import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { CrearCitasComponent } from './crear-citas/crear-citas.component';
import { GeneralModule } from '../general/general.module';
import { ConfirmarCitasComponent } from './confirmar-citas/confirmar-citas.component';
import { BtnSiguienteComponent } from '../general/btn-siguiente/btn-siguiente.component';
import { AppRoutingModule } from '../app-routing.module';
import { BarraLateralComponent } from '../general/barra-lateral/barra-lateral.component';
import { ComponentePendienteRealizadaComponent } from '../general/componente-pendiente-realizada/componente-pendiente-realizada.component';
import { BtnAnteriorComponent } from '../general/btn-anterior/btn-anterior.component';
import { BtnCancelarComponent } from '../general/btn-cancelar/btn-cancelar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitaDataService } from './cita-data.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MensajeConfirmacionComponent } from '../general/mensaje-confirmacion/mensaje-confirmacion.component';

import { ComponentePaginaPrincipalAdministrativoComponent } from './componente-pagina-principal-administrativo/componente-pagina-principal-administrativo.component';
import { BarraLateralAdministrativoComponent } from './barra-lateral-administrativo/barra-lateral-administrativo.component';
import { BreadcumbAdministrativoComponent } from './breadcumb-administrativo/breadcumb-administrativo.component';

import { DetallesCitaComponent } from './detalles-cita/detalles-cita.component';
import { ConfirmaComponent } from '../general/confirma/confirma.component';
import { ModificarCitaComponent } from './modificar-cita/modificar-cita.component';
import { ConfirmarModificarCitaComponent } from './confirmar-modificar-cita/confirmar-modificar-cita.component';
import { TablaCitasPendientesComponent } from './tabla-citas-pendientes/tabla-citas-pendientes.component';

import { ComponentePendienteRealizadaPerfilComponent } from './componente-pendiente-realizada-perfil/componente-pendiente-realizada-perfil.component';
import { PerfilPacienteComponent } from './perfil-paciente/perfil-paciente.component';


import { BuscarPacienteComponent } from './buscar-paciente/buscar-paciente.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginaPacienteComponent } from './pagina-paciente/pagina-paciente.component';
import { TablaCitasGeneralesComponent } from './tabla-citas-generales/tabla-citas-generales.component';
import { FormularioAltaPacienteComponent } from './formulario-alta-paciente/formulario-alta-paciente.component';
import { PasosFormularioComponent } from './pasos-formulario/pasos-formulario.component';
import { DosPasosFormularioComponent } from './dos-pasos-formulario/dos-pasos-formulario.component';





@NgModule({
  declarations: [
    CrearCitasComponent,
    ConfirmarCitasComponent,
    BtnSiguienteComponent,
    BtnAnteriorComponent,
    BtnCancelarComponent,
    MensajeConfirmacionComponent,
    ComponentePaginaPrincipalAdministrativoComponent,
    BarraLateralAdministrativoComponent,
    BreadcumbAdministrativoComponent,
    DetallesCitaComponent,
    ModificarCitaComponent,
    ConfirmarModificarCitaComponent,
    TablaCitasPendientesComponent,
    ConfirmarModificarCitaComponent,

    ComponentePendienteRealizadaPerfilComponent,
    PerfilPacienteComponent,

    BuscarPacienteComponent,
      PaginaPacienteComponent,
      TablaCitasGeneralesComponent,
      FormularioAltaPacienteComponent,
      PasosFormularioComponent,
      DosPasosFormularioComponent,



  ],
  providers: [CitaDataService],
  imports: [
    CommonModule,
    FormsModule,
    GeneralModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'crear-citas', component: CrearCitasComponent },
      { path: 'administrativo/confirmar-citas', component: ConfirmarCitasComponent },
      { path: 'administrativo/confirmar-modificar-citas', component: ConfirmarModificarCitaComponent},
      { path: 'administrativo/citas-pendientes', component: TablaCitasPendientesComponent}
      //Otras rutas
    ]),
    DataTablesModule
  ]
})
export class AdministrativoModule { }
