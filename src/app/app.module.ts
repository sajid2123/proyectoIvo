import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MensajeConfirmacionComponent } from './general/mensaje-confirmacion/mensaje-confirmacion.component';
import { NavBarComponent } from './general/nav-bar/nav-bar.component';

import { GeneralModule } from './general/general.module';
import { RadiologoModule } from './radiologo/radiologo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GeneralModule,
    AppRoutingModule,
    RadiologoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }