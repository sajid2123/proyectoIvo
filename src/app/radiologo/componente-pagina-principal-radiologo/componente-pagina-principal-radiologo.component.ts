import { Component } from '@angular/core';


@Component({
  selector: 'app-componente-pagina-principal-radiologo',
  templateUrl: './componente-pagina-principal-radiologo.component.html',
  styleUrls: ['./componente-pagina-principal-radiologo.component.css']
})
export class ComponentePaginaPrincipalRadiologoComponent {
  selected!: Date;
  activeTab: string =  "pendiente";

  recibirDato(activeTab: string) {
    this.activeTab = activeTab;
  }
}
