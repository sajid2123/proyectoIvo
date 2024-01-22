import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralModule } from './general/general.module';

import { ComponentePaginaPrincipalRadiologoComponent } from './radiologo/componente-pagina-principal-radiologo/componente-pagina-principal-radiologo.component';
import { ComponentePendienteRealizadaComponent } from './general/componente-pendiente-realizada/componente-pendiente-realizada.component';
import { ComponenetePaginaCitaRealizadasComponent } from './radiologo/componenete-pagina-cita-realizadas/componenete-pagina-cita-realizadas.component';
import { CrearCitasComponent } from './administrativo/crear-citas/crear-citas.component';
import { ConfirmaComponent } from './general/confirma/confirma.component';
import { ConfirmarCitasComponent } from './administrativo/confirmar-citas/confirmar-citas.component';
import { BtnSiguienteComponent } from './general/btn-siguiente/btn-siguiente.component';

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
    path: 'administrativo/crear-citas',
    component: CrearCitasComponent
  },
  {
    path: 'administrativo/confirmar-citas',
    component: ConfirmarCitasComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), GeneralModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
