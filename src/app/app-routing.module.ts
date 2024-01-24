import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralModule } from './general/general.module';

import { ComponentePaginaPrincipalRadiologoComponent } from './radiologo/componente-pagina-principal-radiologo/componente-pagina-principal-radiologo.component';
import { ComponentePendienteRealizadaComponent } from './general/componente-pendiente-realizada/componente-pendiente-realizada.component';
import { ComponenetePaginaCitaRealizadasComponent } from './radiologo/componenete-pagina-cita-realizadas/componenete-pagina-cita-realizadas.component';
import { TablaCitasComponent } from './radiologo/tabla-citas/tabla-citas.component';

const routes: Routes = [
  {
    path: 'radiologo',
    component: ComponentePaginaPrincipalRadiologoComponent,
  },
  {
    path: 'pr',
    component: ComponentePendienteRealizadaComponent
  },
  {
    path: 'radiologo/citas-realizadas',
    component: ComponenetePaginaCitaRealizadasComponent
  },
  {
    path: 'tabla',
    component: TablaCitasComponent
  },
  {
<<<<<<< HEAD
    path: 'administrativo/crear-citas',
    component: CrearCitasComponent
  },
  {
    path: 'administrativo/confirmar-citas',
    component: ConfirmarCitasComponent
  },
  {
    path: 'paciente/citas',
    component: TablaPacienteComponent
=======
    path: 'tabla-pacientes',
    component: TablaCitasPacientesComponent
>>>>>>> esteban
  },
  {
    path: 'radiologo/atender-paciente',
    component: AtenderPacienteComponent
  }
  ,
  {
    path: 'breadcrumb',
    component: BreadcrumbAtenderPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), GeneralModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
