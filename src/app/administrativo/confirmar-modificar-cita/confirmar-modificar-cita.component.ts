import { Component, OnInit } from '@angular/core';
import { CitaDataService } from '../cita-data.service';

@Component({
  selector: 'app-confirmar-modificar-cita',
  templateUrl: './confirmar-modificar-cita.component.html',
  styleUrls: ['./confirmar-modificar-cita.component.css']
})
export class ConfirmarModificarCitaComponent {
  datosCitaMod: any = {};
  mostrarModal: boolean = false;


  constructor(private citaDataService: CitaDataService) {}

ngOnInit() {
  this.datosCitaMod = this.citaDataService.datosCitaMod;

}

siguiente() {
  this.mostrarModal = true;

}

mostrarMensajeConfirmacion() {
  this.mostrarModal = false;
}
}
