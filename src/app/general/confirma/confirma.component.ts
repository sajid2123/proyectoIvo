import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-confirma',
  templateUrl: './confirma.component.html',
  styleUrls: ['./confirma.component.css']
})
export class ConfirmaComponent {
  @Input() texto:string = 'Mensaje de texto por defecto'; // Este es el texto que se va a desplegar por defecto en el modal
  @Input() idModal:string = '';
  @Input() enlaceNo:string='';
  @Input() enlaceSi:string='';

}
