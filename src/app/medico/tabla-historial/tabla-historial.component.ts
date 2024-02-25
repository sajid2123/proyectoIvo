import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoService } from '../servicio/medico.service';

interface historial {
  id_prueba: number,
  informe: string,
  fecha: string,
  medico: string,
  servicio:string,
}

@Component({
  selector: 'app-tabla-historial',
  templateUrl: './tabla-historial.component.html',
  styleUrls: ['./tabla-historial.component.css']
})
export class TablaHistorialComponent {
  @Input() id_paciente!: number;
  historiales!: historial[] ;
  existir: boolean = false;

  

  constructor(private router: Router,private medicoService: MedicoService) {}

  onRowClick(historial: historial){
    this.router.navigate(['/app/medico/atender-paciente/historial'], { queryParams: { fecha: historial.fecha, id_prueba: historial.id_prueba} });
  }

  dtOptions: DataTables.Settings = {}

  ngOnInit(): void {
    this.getAllPruebas();
    this.dtOptions = {
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
      },
      pagingType: "numbers"
    }
  }
  getAllPruebas(){
    this.medicoService.getAllPruebas(this.id_paciente)
    .subscribe(
        (response: any) => {
          this.existir = true;
          this.historiales = response.data.map((response: historial) => ({
            id_prueba: response.id_prueba,
            informe: response.informe,
            fecha: response.fecha,
            medico: response.medico, 
            servicio: response.servicio 
          }))
          console.log(response); 
        }
    );
  }
  
}
