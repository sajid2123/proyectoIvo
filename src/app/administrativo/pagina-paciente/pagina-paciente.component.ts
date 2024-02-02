import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-paciente',
  templateUrl: './pagina-paciente.component.html',
  styleUrls: ['./pagina-paciente.component.css']
})
export class PaginaPacienteComponent {
  citas:string = 'citas-pendientes'; 
  ventana:string = 'Citas';
}
