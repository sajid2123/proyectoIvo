import { Component,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalles-cita',
  templateUrl: './detalles-cita.component.html',
  styleUrls: ['./detalles-cita.component.css']
})
export class DetallesCitaComponent {
  //mostrarModal: boolean = false;
  mostrarConfirma: boolean = false;

  confirmarAnulacion() {
    this.mostrarConfirma = true;
  }
}
