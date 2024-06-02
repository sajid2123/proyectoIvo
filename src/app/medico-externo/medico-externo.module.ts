import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratosComponent } from './contratos/contratos.component';
import { FacturasComponent } from './facturas/facturas.component';
import { DataTablesModule } from 'angular-datatables';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ContratosComponent,
    FacturasComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FontAwesomeModule,
  ]
})
export class MedicoExternoModule { }
