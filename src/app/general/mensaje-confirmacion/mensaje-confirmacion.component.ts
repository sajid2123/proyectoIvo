import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-confirmacion',
  templateUrl: './mensaje-confirmacion.component.html',
  styleUrls: ['./mensaje-confirmacion.component.css']
})
export class MensajeConfirmacionComponent {
  @Input() texto:string = '';   // Este es el texto que se va a desplegar por defecto en el modal
  @Input() idModal:string = ''; // Este id nos permitirá detectar el modal que nosotros queremos que se active cuando nosotros hacemos click en el boton de "siguiente"
                                // Esto es porque cada modal que nosotros vayamos a utilizar tiene que tener un id con el que se pueda encontrar en el html
                                // Este id tiene que coincidir con el que idModal que nosotros le pasamos al boton de "siguiente" para que se pueda activar al hacer click
                      
  @Input() enlace:string='';    // Este es el enlace que el modal podrá redireccionar
}
