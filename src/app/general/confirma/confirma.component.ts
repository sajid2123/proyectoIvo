import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-confirma',
  templateUrl: './confirma.component.html',
  styleUrls: ['./confirma.component.css']
})
export class ConfirmaComponent {
  @Input() texto:string = 'Mensaje de texto por defecto';
  @Input() idModal:string = '';
  @Input() enlaceNo:string='';
  @Input() enlaceSi:string='';
  @Output() confirmacion: EventEmitter<void> = new EventEmitter<void>();

  confirmarEliminacion() {
    // Emitir el evento de confirmación
    this.confirmacion.emit();
  }
}
