import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentePaginaPrincipalRadiologoComponent } from './componente-pagina-principal-radiologo/componente-pagina-principal-radiologo.component';
import { GeneralModule } from '../general/general.module';
import { ComponentePendienteRealizadaComponent } from '../general/componente-pendiente-realizada/componente-pendiente-realizada.component';
import { ComponenetePaginaCitaRealizadasComponent } from './componenete-pagina-cita-realizadas/componenete-pagina-cita-realizadas.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    ComponentePaginaPrincipalRadiologoComponent,
    ComponenetePaginaCitaRealizadasComponent
  ],
  imports: [
    CommonModule,
    GeneralModule,
    AppRoutingModule

  ]
})
export class RadiologoModule { }
