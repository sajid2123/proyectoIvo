import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-confirmacion',
  templateUrl: './mensaje-confirmacion.component.html',
  styleUrls: ['./mensaje-confirmacion.component.css']
})
export class MensajeConfirmacionComponent {
  @Input() texto:string = 'Mensaje de texto por defecto';
  @Input() idModal:string = '';

  //@Output() cerrar = new EventEmitter<void>();
/*
  cerrarMensaje() {
    this.cerrar.emit();
  }
*/
}
