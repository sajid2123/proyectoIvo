import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { ConfirmaComponent } from './confirma/confirma.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MensajeConfirmacionComponent } from './mensaje-confirmacion/mensaje-confirmacion.component';



@NgModule({
  declarations: [
    BarraLateralComponent,
    ConfirmaComponent,
    NavBarComponent,
    MensajeConfirmacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarraLateralComponent,
    NavBarComponent,
    MensajeConfirmacionComponent,
    ConfirmaComponent
  ]
})
export class GeneralModule { }
