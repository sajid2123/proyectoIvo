import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface historial {
  fecha: string;
  servicio: string;
  medico: string;
}

@Component({
  selector: 'app-tabla-historial',
  templateUrl: './tabla-historial.component.html',
  styleUrls: ['./tabla-historial.component.css']
})
export class TablaHistorialComponent {
  historiales: historial[] = [
    { fecha: '19-06-2023', servicio: 'Radiólogo', medico: 'Marta Antonia' },
    { fecha: '20-06-2023', servicio: 'General', medico: 'Marta Antonia' },
    { fecha: '20-06-2023', servicio: 'General', medico: 'López Sánchez' },
    { fecha: '20-06-2023', servicio: 'General', medico: 'Rafael Enrique' },
    { fecha: '19-06-2023', servicio: 'Radiólogo', medico: 'Carla Sofía' },
    { fecha: '20-06-2023', servicio: 'General', medico: 'López Sánchez' },
    { fecha: '19-06-2023', servicio: 'Radiólogo', medico: 'Sánchez Martínez' },
    { fecha: '20-06-2023', servicio: 'General', medico: 'Rafael Enrique' }
  ];
  

  constructor(private router: Router) {}

  onRowClick(historial: historial){
    this.router.navigate(['/app/medico/atender-paciente/historial'], { queryParams: { fecha: historial.fecha } });
  }

  dtOptions: DataTables.Settings = {}

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
      },
      pagingType: "numbers"
    }
  }
}
