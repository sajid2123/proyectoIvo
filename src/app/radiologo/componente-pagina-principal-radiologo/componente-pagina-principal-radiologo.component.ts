import { Component } from '@angular/core';


@Component({
  selector: 'app-componente-pagina-principal-radiologo',
  templateUrl: './componente-pagina-principal-radiologo.component.html',
  styleUrls: ['./componente-pagina-principal-radiologo.component.css']
})
export class ComponentePaginaPrincipalRadiologoComponent {

  selected: Date | null = null;
  activeTab: string =  "pendiente";
  mostrarComponentePendiente: boolean = false;
  mostrarComponenteRealizada: boolean = false;

  ngOnInit(): void {

  }
  handleCargadoPendiente(event: boolean) {
    this.mostrarComponentePendiente = event;
  }
  handleCargadoRealizada(event: boolean) {
    this.mostrarComponenteRealizada = event;
  }
  recibirDato(activeTab: string) {
    this.activeTab = activeTab;
    console.log(this.activeTab);
  }
  get formattedDate(): string {
    // Usa la fecha seleccionada o la fecha actual si no hay ninguna seleccionada
    const date = this.selected ? this.selected : new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Retorna la fecha en formato 'YYYY-MM-DD'
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }
  
}
