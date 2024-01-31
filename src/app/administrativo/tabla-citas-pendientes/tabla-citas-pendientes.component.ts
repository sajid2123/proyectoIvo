import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-citas-pendientes',
  templateUrl: './tabla-citas-pendientes.component.html',
  styleUrls: ['./tabla-citas-pendientes.component.css']
})

export class TablaCitasPendientesComponent {

  @Input() pendienteRealizada:string = ''; 

}
