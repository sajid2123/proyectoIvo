import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralModule } from './general/general.module';

import { MedicoModule } from './medico/medico.module';

import { ComponentePaginaPrincipalRadiologoComponent } from './radiologo/componente-pagina-principal-radiologo/componente-pagina-principal-radiologo.component';
import { ComponentePendienteRealizadaComponent } from './general/componente-pendiente-realizada/componente-pendiente-realizada.component';
import { TablaCitasComponent } from './radiologo/tabla-citas/tabla-citas.component';


import { CrearCitasComponent } from './administrativo/crear-citas/crear-citas.component';
import { ConfirmarCitasComponent } from './administrativo/confirmar-citas/confirmar-citas.component';
import { DetallesCitaComponent } from './administrativo/detalles-cita/detalles-cita.component';
import { ModificarCitaComponent } from './administrativo/modificar-cita/modificar-cita.component';

import { AtenderPacienteComponent } from './radiologo/atender-paciente/atender-paciente.component';


import { ComponentePaginaPrincipalAdministrativoComponent } from './administrativo/componente-pagina-principal-administrativo/componente-pagina-principal-administrativo.component';
import { TablaCitasPendientesComponent } from './administrativo/tabla-citas-pendientes/tabla-citas-pendientes.component';
import { PaginaPrincipalPacienteComponent } from './paciente/pagina-principal-paciente/pagina-principal-paciente.component';
import { PaginaCitaPruebasComponent } from './paciente/pagina-cita-pruebas/pagina-cita-pruebas.component';
import { CitasPacienteDetallesComponent } from './paciente/citas-paciente-detalles/citas-paciente-detalles.component';
import { TabsAtenderPacienteComponent } from './medico/tabs-atender-paciente/tabs-atender-paciente.component';
import { PaginaPrincipalMedicoComponent } from './medico/pagina-principal-medico/pagina-principal-medico.component';


const routes: Routes = [
  {
    path: 'radiologo',
    component: ComponentePaginaPrincipalRadiologoComponent,
  },
  {
    path: 'administrativo',
    component: ComponentePaginaPrincipalAdministrativoComponent,
    children:[{
      path: 'citas-pendientes',
      component: TablaCitasPendientesComponent
    }]
  },
  {
    path: 'pr',
    component: ComponentePendienteRealizadaComponent
  },
  

  //RUTAS RADIÓLOGO
  {
    path: 'radiologo',
    component: ComponentePaginaPrincipalRadiologoComponent,
    children: [
      // {
      //     path: 'citas-realizadas',
      //     component: ComponenetePaginaCitaRealizadasComponent
      // }
    ]
  },
  // {
  //   path: 'radiologo/citas-realizadas',
  //   component: ComponenetePaginaCitaRealizadasComponent
  // },
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
    path: 'paciente',
    component: PaginaPrincipalPacienteComponent
  }
  ,
  {
    path: 'paciente/pruebas',
    component: PaginaCitaPruebasComponent
  },
  {
    path: 'paciente/detalles',
    component: CitasPacienteDetallesComponent
  },
  {
    path: 'tabla-pacientes',
    component: TablaCitasComponent
  },
  {
    path: 'radiologo/atender-paciente',
    component: AtenderPacienteComponent
  },

  //RUTAS MÉDICO
  {
    path: 'tabs',
    component: TabsAtenderPacienteComponent
  },
  {
    path: 'medico',
    component: PaginaPrincipalMedicoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), GeneralModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
