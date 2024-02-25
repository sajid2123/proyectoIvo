import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrativoServiceService } from '../administrativo-service.service';

@Component({
  selector: 'app-detalles-cita',
  templateUrl: './detalles-cita.component.html',
  styleUrls: ['./detalles-cita.component.css']
})
export class DetallesCitaComponent implements OnInit {
  idMedico: string = '';
  nombreServicio: string = '';
  fecha: string = '';
  hora: string = '';
  idCita: string = '';
  estado: string = '';
  nombreMedico: string='';
  idUsuarioPaciente: string = '';

  mostrarConfirma: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private administrativoService: AdministrativoServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nombreMedico = params.get('nombreMedico') ?? '';
      this.nombreServicio = params.get('nombreServicio') ?? '';
      this.hora = params.get('hora') ?? '';
      this.fecha = params.get('fecha') ?? '';
      this.idUsuarioPaciente = params.get('idPaciente') ?? '';
      this.idCita = params.get('idCita') ?? '';

      



      console.log("Medico:", this.idMedico);
      console.log("Servicio:", this.nombreServicio);
      console.log("Fecha:", this.fecha);
      console.log("Hora:", this.hora);
      console.log("Nombre:", this.nombreMedico);
      console.log("Id usuario:", this.idUsuarioPaciente);
    });
  }

  confirmarAnulacion() {
    this.mostrarConfirma = true;
  }

  confirmarEliminacion(idCita: string) {
    // Ocultar el modal
    this.mostrarConfirma = false;

    this.administrativoService.eliminarCita(idCita).subscribe(
      () => {
        console.log('Cita eliminada correctamente');
        // Redirigir a la página principal después de eliminar la cita
        this.router.navigate([`/app/administrativo/paciente/${this.idUsuarioPaciente}`]);
      },
      error => {
        console.error('Error al eliminar la cita:', error);
        // Aquí puedes manejar el error, mostrar un mensaje al usuario, etc.
      }
    );
}

  
}
