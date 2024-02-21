import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrativoServiceService } from '../administrativo-service.service';

@Component({
  selector: 'app-tabla-citas-pendientes',
  templateUrl: './tabla-citas-pendientes.component.html',
  styleUrls: ['./tabla-citas-pendientes.component.css']
})
export class TablaCitasPendientesComponent implements OnInit {

  idPaciente: string = '';

  @Input() pendienteRealizada:string = '';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  citas: any[] = [];
  nombrePaciente: string = '';
  sipPaciente: string = '';
  apellido: string = '';
  servicio: string = '';
  hora: string = '';
  idCita: string ='';
  estado: string = 'pendiente'; // Definir el estado por defecto
  medico: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private administrativoService: AdministrativoServiceService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.route.params.subscribe((params) => {
      this.idPaciente = params['id_paciente'];
      this.obtenerDatosPaciente(this.idPaciente);
      this.obtenerDatosCita(this.idPaciente);
    });
  }

  obtenerDatosPaciente(idPaciente: string): void {
    this.administrativoService.obtenerPaciente(idPaciente).subscribe(
      (response) => {
        this.nombrePaciente = response.usuario.nombre;
        this.sipPaciente = response.sip;
        this.apellido = response.usuario.apellido1;
      },
      (error) => {
        console.error('Error al obtener los datos del paciente:', error);
      }
    );
  }

  obtenerDatosCita(idPaciente: string): void {
    this.administrativoService.obtenerCitas(idPaciente, this.estado).subscribe(
      (response) => {
        this.citas = response.citas;
        this.dtTrigger.next(null); // Emitir el evento para actualizar los datos en la tabla
      },
      (error) => {
        console.error('Error al obtener los datos de la cita:', error);
      }
    );
  }

  obtenerNombreMedico(idMedico: string): void {
    this.administrativoService.obtenerNombreMedico(idMedico).subscribe(
      (nombreMedico: string) => {
        this.medico = nombreMedico;
      },
      (error) => {
        console.error('Error al obtener el nombre del médico:', error);
      }
    );
  }

  eliminarCita(idCita: string) {
    this.administrativoService.eliminarCita(idCita).subscribe(() => {
      // Si la eliminación fue exitosa, actualiza la lista de citas
      this.obtenerDatosCita(this.idPaciente);
    });
    console.log(idCita);
  }

  detallesCita(idMedico: string, idServicio: string, hora: string, idCita: string) {
    this.router.navigate(['app/administrativo/detalles-citas', idMedico, idServicio, hora, idCita]);
  }

  modificarCita(idCita: string): void {
    const url = `/app/administrativo/modificar-citas/${idCita}`;
    this.router.navigateByUrl(url);
    console.log(`Click sobre`);
    console.log(url);
  }

}
