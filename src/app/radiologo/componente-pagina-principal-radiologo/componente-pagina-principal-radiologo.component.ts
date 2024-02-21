import { Component,ViewChild  } from '@angular/core';
import { TablaCitasPendientesComponent } from '../tabla-citas-pendientes/tabla-citas-pendientes.component';
import { TablaCitasRealizadasComponent } from '../tabla-citas-realizadas/tabla-citas-realizadas.component';


@Component({
  selector: 'app-componente-pagina-principal-radiologo',
  templateUrl: './componente-pagina-principal-radiologo.component.html',
  styleUrls: ['./componente-pagina-principal-radiologo.component.css']
})
export class ComponentePaginaPrincipalRadiologoComponent {

  selected:  Date = new Date();
  activeTab: string =  "pendiente";


  ngOnInit(): void {

  }

  @ViewChild(TablaCitasPendientesComponent) tablaPendiente!:TablaCitasPendientesComponent;
  @ViewChild(TablaCitasRealizadasComponent) tablaRealizada!:TablaCitasRealizadasComponent;

  recibirDato(activeTab: string) {
    this.activeTab = activeTab;
    console.log(this.activeTab);
  }

  calendario(fecha:Date){
    this.selected = fecha;
    if (this.activeTab == "pendiente") {
      this.tablaPendiente.refrescarTabla(this.selected);
    } else {
      this.tablaRealizada.refrescarTabla(this.selected);
    }
  }
 
  
}
