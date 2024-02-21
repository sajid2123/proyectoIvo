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
  idServicio: string = '';
  fecha: string = '';
  hora: string = '';
  idCita: string = '';
  estado: string = '';
  idUsuarioPaciente: string = '';

  mostrarConfirma: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private administrativoService: AdministrativoServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idMedico = params.get('idMedico') ?? '';
      this.idServicio = params.get('idServicio') ?? '';
      this.idCita = params.get('idCita') ?? '';
      this.hora = params.get('hora') ?? '';
      this.fecha = params.get('fecha') ?? '';



      console.log("Medico:", this.idMedico);
      console.log("Servicio:", this.idServicio);
      console.log("Fecha:", this.fecha);
      console.log("Hora:", this.hora);
      console.log("Fecha:", this.fecha);
    });
  }

  obtenerDatosPaciente(idPaciente: string): void {
    this.administrativoService.obtenerPaciente(idPaciente).subscribe(
      (response) => {
        this.idUsuarioPaciente = response.id_usuario_paciente;
      },
      (error) => {
        console.error('Error al obtener los datos del paciente:', error);
      }
    );
  }

  confirmarAnulacion() {
    this.mostrarConfirma = true;
  }

  confirmarEliminacion() {
    //Ocultar el modal
    this.mostrarConfirma = false;

    this.administrativoService.eliminarCita(this.idCita).subscribe(
      () => {
        console.log('Cita eliminada correctamente');
        // Redirigir a la página principal, o a donde corresponda después de la eliminación
        this.router.navigate([`/app/administrativo/paciente/${this.idUsuarioPaciente}`]);

      },
      error => {
        console.error('Error al eliminar la cita:', error);
        // Aquí puedes manejar el error, mostrar un mensaje al usuario, etc.
      }
    );
  }
}
