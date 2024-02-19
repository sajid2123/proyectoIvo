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
      const fechaHora = params.get('hora') ?? '';

      // Parsear la fecha
      const fecha = new Date(fechaHora);
      // Obtener el nombre del día
      const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      const diaSemana = diasSemana[fecha.getDay()];
      // Obtener el nombre del mes
      const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
      const mes = meses[fecha.getMonth()];
      // Formatear la fecha
      this.fecha = `${diaSemana} ${fecha.getDate()} de ${mes} de ${fecha.getFullYear()}`;
      // Asignar la hora
      this.hora = fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      console.log("Medico:", this.idMedico);
      console.log("Servicio:", this.idServicio);
      console.log("Fecha:", this.fecha);
      console.log("Hora:", this.hora);
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
