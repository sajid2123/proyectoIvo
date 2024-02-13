import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { MensajeConfirmacionComponent } from '../mensaje-confirmacion/mensaje-confirmacion.component';

@Component({
  selector: 'app-confirmar-cambios',
  templateUrl: './confirmar-cambios.component.html',
  styleUrls: ['./confirmar-cambios.component.css']
})
export class ConfirmarCambiosComponent {
  

  @Input() tCambios:string = 'Teléfono:  644 30 20 29  ->  644 30 99 99 <br> Dirección: C/miCasa -> C/Crevillent <br> Código postal: 46011-> 46012';
  @Input() idModal:string = '';
  @Input() enlaceNo:string='';
  @Input() enlaceSi:string=''

 

}
