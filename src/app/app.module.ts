import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MensajeConfirmacionComponent } from './general/mensaje-confirmacion/mensaje-confirmacion.component';
import { NavBarComponent } from './general/nav-bar/nav-bar.component';

import { GeneralModule } from './general/general.module';
import { RadiologoModule } from './radiologo/radiologo.module';
import { FormsModule } from '@angular/forms';
import { AdministrativoModule } from './administrativo/administrativo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GeneralModule,
    AppRoutingModule,
    RadiologoModule,
    AdministrativoModule,
    BrowserModule,
    RadiologoModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
