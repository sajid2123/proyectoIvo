

import { Component, OnInit } from '@angular/core';
import { CitaDataService } from '../cita-data.service';

@Component({
  selector: 'app-confirmar-citas',
  templateUrl: './confirmar-citas.component.html',
  styleUrls: ['./confirmar-citas.component.css'],
})
export class ConfirmarCitasComponent implements OnInit {
  datosCita: any = {};
  mostrarModal: boolean = false;


  constructor(private citaDataService: CitaDataService) {}

ngOnInit() {
  this.datosCita = this.citaDataService.datosCita;

}

siguiente() {
  this.mostrarModal = true;

}

mostrarMensajeConfirmacion() {
  this.mostrarModal = false;
}

}
