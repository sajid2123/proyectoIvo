import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-siguiente',
  templateUrl: './btn-siguiente.component.html',
  styleUrls: ['./btn-siguiente.component.css']
})
export class BtnSiguienteComponent {
    @Input() mostrarModal:boolean = false; // mostrarModal es un booleano que utilizamos para poder determinar si queremos lanzar un modal(mensaje de confirmacion/aviso/"accion realizada exitosamente") cuando el usuario haga click
    @Input() idModal:string = ''; // Para poder activar un modal, hay que pasarle el id con el que ese modal se identifica.
}
