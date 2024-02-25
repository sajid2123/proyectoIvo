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
  estado: string;
  id_cita: string;
}
@Component({
  selector: 'tabla-citas-realizadas',
  templateUrl: './tabla-citas-realizadas.component.html',
  styleUrls: ['./tabla-citas-realizadas.component.css']
})
export class TablaCitasRealizadasComponent {
  @Input() fecha!:Date;
  @Input() citas!: Cita[];
  existir:boolean = false;
  idMedico:number = Number(localStorage.getItem("id_usuario"));
  fechaCompleta:string = ""; 

  servicioMedico = inject(MedicoService);
  constructor(private router: Router) {}

  onRowClick(cita: Cita){
    this.router.navigate(['/app/medico/atender-paciente'], { queryParams: { sip: cita.sip, nombre: cita.nombre, apellido: cita.apellido, hora: cita.hora, estado: cita.estado, id_cita: cita.id_cita } });
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

    this.servicioMedico.obtenerCitasRealizadasSegunIdMedicoYFecha(this.idMedico, this.fechaCompleta).subscribe(
      (response) => {
        this.existir = true;
        this.citas = response;
      }
    )
  }

  refrescarTabla(fechaEntrada:Date){
    this.existir = false;
    this.fechaCompleta = fechaEntrada.getFullYear() + "-"  + (fechaEntrada.getUTCMonth()+1) + "-" + fechaEntrada.getDate();

    this.servicioMedico.obtenerCitasRealizadasSegunIdMedicoYFecha(this.idMedico,this.fechaCompleta).subscribe(
      (response) => {
        this.existir = true;
        this.citas = response;
      }
    )
  }
}
