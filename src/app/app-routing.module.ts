import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralModule } from './general/general.module';

import { ComponentePaginaPrincipalRadiologoComponent } from './radiologo/componente-pagina-principal-radiologo/componente-pagina-principal-radiologo.component';
import { ComponentePendienteRealizadaComponent } from './general/componente-pendiente-realizada/componente-pendiente-realizada.component';
import { ComponenetePaginaCitaRealizadasComponent } from './radiologo/componenete-pagina-cita-realizadas/componenete-pagina-cita-realizadas.component';

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
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), GeneralModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
