import { Component } from '@angular/core';

@Component({
  selector: 'app-detalles-cita',
  templateUrl: './detalles-cita.component.html',
  styleUrls: ['./detalles-cita.component.css']
})
export class DetallesCitaComponent {
  mostrarModal: boolean = false;
  anularCita() {
    this.mostrarModal = true;

  }

  mostrarMensajeCancelar() {
    this.mostrarModal = false;
  }
}
