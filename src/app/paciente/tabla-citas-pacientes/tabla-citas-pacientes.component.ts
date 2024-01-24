import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

interface Cita {
  fecha: string;
  medico: string;
  servicio: string;
  hora: string;
}

@Component({
  selector: 'app-tabla-citas-pacientes',
  templateUrl: './tabla-citas-pacientes.component.html',
  styleUrls: ['./tabla-citas-pacientes.component.css']
})
export class TablaCitasPacientesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  // Asegúrate de tener el mismo número de columnas aquí
  pacientes: any[] = [
        { fecha: '20-12-2023', medico: 'Antonia', servicio: 'General', hora: '08:00' },
    { fecha: '20-12-2023', medico: 'Marta Antonia', servicio: 'General', hora: '08:00' },
    { fecha: '20-12-2023', medico: 'Marta', servicio: 'General', hora: '08:00' }
  ];

  ngOnInit(): void {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      searching: false, // Desactivar la búsqueda
      lengthMenu: [5, 10, 25], // Opciones para mostrar entradas
      pageLength: 10, // Entradas por página predeterminadas
       
    };
    this.dtTrigger.next(null);
// this.dtTrigger.next(); // Comenta o elimina esta línea si no necesitas pasar datos adicionales

  }

/*   citas: Cita[] = [
    { fecha: '20-12-2023', medico: 'Marta Antonia', servicio: 'General', hora: '08:00' },
    { fecha: '20-12-2023', medico: 'Marta Antonia', servicio: 'General', hora: '08:00' },
    { fecha: '20-12-2023', medico: 'Marta Antonia', servicio: 'General', hora: '08:00' }
  ]; */
}


