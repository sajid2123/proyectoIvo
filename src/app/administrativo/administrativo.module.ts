import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CrearCitasComponent } from './crear-citas/crear-citas.component';
import { GeneralModule } from '../general/general.module';
import { ConfirmarCitasComponent } from './confirmar-citas/confirmar-citas.component';
import { BtnSiguienteComponent } from '../general/btn-siguiente/btn-siguiente.component';
import { AppRoutingModule } from '../app-routing.module';
import { BarraLateralComponent } from '../general/barra-lateral/barra-lateral.component';
import { ComponentePendienteRealizadaComponent } from '../general/componente-pendiente-realizada/componente-pendiente-realizada.component';
import { BtnAnteriorComponent } from '../general/btn-anterior/btn-anterior.component';
import { BtnCancelarComponent } from '../general/btn-cancelar/btn-cancelar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitaDataService } from './cita-data.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MensajeConfirmacionComponent } from '../general/mensaje-confirmacion/mensaje-confirmacion.component';



@NgModule({
  declarations: [
    CrearCitasComponent,
    ConfirmarCitasComponent,
    BtnSiguienteComponent,
    BtnAnteriorComponent,
    BtnCancelarComponent,
    MensajeConfirmacionComponent,

  ],
  providers: [CitaDataService],
  imports: [
    CommonModule,
    FormsModule,
    GeneralModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forChild([
      { path: 'crear-citas', component: CrearCitasComponent },
      { path: 'administrativo/confirmar-citas', component: ConfirmarCitasComponent },
      //Otras rutas
    ]),

  ]
})
export class AdministrativoModule { }
