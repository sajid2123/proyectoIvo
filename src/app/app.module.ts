import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MensajeConfirmacionComponent } from './general/mensaje-confirmacion/mensaje-confirmacion.component';
import { NavBarComponent } from './general/nav-bar/nav-bar.component';

import { GeneralModule } from './general/general.module';
import { RadiologoModule } from './radiologo/radiologo.module';
import { AdministrativoModule } from './administrativo/administrativo.module';
import { BarraLateralComponent } from './general/barra-lateral/barra-lateral.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    GeneralModule,
    AppRoutingModule,
    RadiologoModule,
    AdministrativoModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
