import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-principal-medico',
  templateUrl: './pagina-principal-medico.component.html',
  styleUrls: ['./pagina-principal-medico.component.css']
})
export class PaginaPrincipalMedicoComponent {
  selected!: Date;
  activeTab: string =  "pendiente";

  recibirDato(activeTab: string) {
    this.activeTab = activeTab;
    console.log(activeTab);
  }
}
