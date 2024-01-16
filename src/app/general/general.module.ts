import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { ConfirmaComponent } from './confirma/confirma.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MensajeConfirmacionComponent } from './mensaje-confirmacion/mensaje-confirmacion.component';
import { ComponentePendienteRealizadaComponent } from './componente-pendiente-realizada/componente-pendiente-realizada.component';



@NgModule({
  declarations: [
    BarraLateralComponent,
    ConfirmaComponent,
    NavBarComponent,
    MensajeConfirmacionComponent,
    ComponentePendienteRealizadaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BarraLateralComponent,
    NavBarComponent,
    MensajeConfirmacionComponent,
    ConfirmaComponent,
    ComponentePendienteRealizadaComponent
  ]
})
export class GeneralModule { }
