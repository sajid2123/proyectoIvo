import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-confirmacion',
  templateUrl: './mensaje-confirmacion.component.html',
  styleUrls: ['./mensaje-confirmacion.component.css']
})
export class MensajeConfirmacionComponent {
  @Output() cerrar = new EventEmitter<void>();
  @Input() texto: string = 'Mensaje de texto por defecto';

  cerrarMensaje() {
    this.cerrar.emit();
  }
}
