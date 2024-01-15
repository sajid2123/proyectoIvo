import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentePaginaPrincipalRadiologoComponent } from './componente-pagina-principal-radiologo/componente-pagina-principal-radiologo.component';
import { GeneralModule } from '../general/general.module';



@NgModule({
  declarations: [
    ComponentePaginaPrincipalRadiologoComponent,
  ],
  imports: [
    CommonModule,
    GeneralModule
  
  ]
})
export class RadiologoModule { }
