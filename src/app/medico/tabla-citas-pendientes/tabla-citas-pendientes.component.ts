import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { MedicoService } from '../servicio/medico.service';
import { Input } from '@angular/core';

interface Cita {
  sip: string;
  nombre: string;
  apellido: string;
  hora: string;
  id_cita: number;
  estado: string;
  id_paciente: number;
}

@Component({
  selector: 'tabla-citas-pendientes',
  templateUrl: './tabla-citas-pendientes.component.html',
  styleUrls: ['./tabla-citas-pendientes.component.css']
})

export class TablaCitasPendientesComponent {
  @Input() fecha!:Date;
  @Input() citas!: Cita[];
  

  existir:boolean = false;
  idMedico:number = Number(localStorage.getItem("id_usuario"));
  fechaCompleta:string = ""; 

  servicioMedico = inject(MedicoService);
  constructor(private router: Router) {}

  onRowClick(cita: Cita){
    this.router.navigate(['/app/medico/atender-paciente'], { queryParams: { sip: cita.sip, nombre: cita.nombre, apellido: cita.apellido, hora: cita.hora, id_cita: cita.id_cita, estado: cita.estado, id_paciente: cita.id_paciente}});
  }

  dtOptions: DataTables.Settings = {}

  ngOnInit(): void {

    this.dtOptions = {
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
      },
      pagingType: "numbers"
    }

    this.fechaCompleta =this.fecha.getFullYear() + "-"  + (this.fecha.getUTCMonth()+1) + "-" + this.fecha.getDate();

    this.servicioMedico.obtenerCitasPendientesSegunIdMedicoYFecha(this.idMedico, this.fechaCompleta).subscribe(
      (response) => {
        console.log(response);
        this.existir = true;
        this.citas = response;
      }
    )
  }

  refrescarTabla(fechaEntrada:Date){
    this.existir = false;
    this.fechaCompleta = fechaEntrada.getFullYear() + "-"  + (fechaEntrada.getUTCMonth()+1) + "-" + fechaEntrada.getDate();

    this.servicioMedico.obtenerCitasPendientesSegunIdMedicoYFecha(this.idMedico,this.fechaCompleta).subscribe(
      (response) => {
        
        this.existir = true;
        this.citas = response;
      }
    )
  }
}
