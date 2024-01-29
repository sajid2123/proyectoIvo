import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralModule } from './general/general.module';

import { ComponentePaginaPrincipalRadiologoComponent } from './radiologo/componente-pagina-principal-radiologo/componente-pagina-principal-radiologo.component';
import { ComponentePendienteRealizadaComponent } from './general/componente-pendiente-realizada/componente-pendiente-realizada.component';
import { ComponenetePaginaCitaRealizadasComponent } from './radiologo/componenete-pagina-cita-realizadas/componenete-pagina-cita-realizadas.component';
import { TablaCitasComponent } from './radiologo/tabla-citas/tabla-citas.component';


import { CrearCitasComponent } from './administrativo/crear-citas/crear-citas.component';
import { ConfirmarCitasComponent } from './administrativo/confirmar-citas/confirmar-citas.component';
import { TablaPacienteComponent } from './paciente/tabla-paciente/tabla-paciente.component';
import { DetallesCitaComponent } from './administrativo/detalles-cita/detalles-cita.component';
import { ModificarCitaComponent } from './administrativo/modificar-cita/modificar-cita.component';

import { AtenderPacienteComponent } from './radiologo/atender-paciente/atender-paciente.component';



const routes: Routes = [
  {
    path: 'pr',
    component: ComponentePendienteRealizadaComponent
  },

  //RUTAS RADIÓLOGO
  {
    path: 'radiologo',
    component: ComponentePaginaPrincipalRadiologoComponent,
  },
  {
    path: 'radiologo/citas-realizadas',
    component: ComponenetePaginaCitaRealizadasComponent
  },
  {
    path: 'tabla',
    component: TablaCitasComponent
  },

  //RUTAS ADMINISTRATIVO
  {
    path: 'administrativo/crear-citas',
    component: CrearCitasComponent
  },
  {
    path: 'administrativo/confirmar-citas',
    component: ConfirmarCitasComponent
  },
  {
    path: 'administrativo/detalles-citas',
    component: DetallesCitaComponent
  },
  {
    path: 'administrativo/modificar-citas',
    component: ModificarCitaComponent
  },

  //RUTAS PACIENTE
  {
    path: 'paciente/citas',
    component: TablaPacienteComponent


  },
  {
    path: 'tabla-pacientes',
    component: TablaCitasComponent


  },
  {
    path: 'radiologo/atender-paciente',
    component: AtenderPacienteComponent
  },
  {
    path: 'breadcrumb',
    component: BreadcrumbAtenderPacienteComponent
  }

  //RUTAS MÉDICO
];

@NgModule({
  imports: [RouterModule.forRoot(routes), GeneralModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
