import { Component, ViewChild } from '@angular/core';
import { MedicoService } from '../servicio/medico.service';
import { inject } from '@angular/core';
import { TablaCitasPendientesComponent } from '../tabla-citas-pendientes/tabla-citas-pendientes.component';
import { TablaCitasRealizadasComponent } from '../tabla-citas-realizadas/tabla-citas-realizadas.component';

@Component({
  selector: 'app-pagina-principal-medico',
  templateUrl: './pagina-principal-medico.component.html',
  styleUrls: ['./pagina-principal-medico.component.css'],
})

export class PaginaPrincipalMedicoComponent {
  selected: Date = new Date();
  activeTab: string =  "pendiente";
  servicioMedico = inject(MedicoService);

  @ViewChild(TablaCitasPendientesComponent) tablaPendiente!:TablaCitasPendientesComponent;
  @ViewChild(TablaCitasRealizadasComponent) tablaRealizada!:TablaCitasRealizadasComponent;

  recibirDato(activeTab: string) {
    this.activeTab = activeTab;
    console.log(activeTab);
  }

  calendario(entrada:any){
    this.selected = entrada;

    if (this.activeTab == "pendiente") {
      this.tablaPendiente.refrescarTabla(this.selected);
    } else {
      this.tablaRealizada.refrescarTabla(this.selected);
    }
    
  }
}
