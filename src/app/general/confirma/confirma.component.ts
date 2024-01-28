import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-confirma',
  templateUrl: './confirma.component.html',
  styleUrls: ['./confirma.component.css']
})
export class ConfirmaComponent {
  @Output() cerrar = new EventEmitter<void>();

  cerrarMensaje() {
    this.cerrar.emit();
  }
}
