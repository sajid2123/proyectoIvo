import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
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
  medico: string = '';
  servicio: string = '';
  hora: string = '';
  idCita: string ='';
  estado: string = 'pendiente'; // Definir el estado por defecto

  constructor(private http: HttpClient,private route: ActivatedRoute,  private router: Router) {}

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



    this.obtenerDatosPaciente(this.idPaciente);
  }

  obtenerDatosPaciente(idPaciente: string): void {
    this.http.get<any>(`http://localhost/api/v1/pacientes/${idPaciente}`).subscribe(
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
    this.http.get<any>(`http://localhost/api/v1/citas?id_usuario_paciente=${idPaciente}&estado=${this.estado}`).subscribe(
      (response) => {
        // Puedes ajustar esto según la estructura de tu respuesta
        this.idCita =response.id_cita;
        this.medico = response.id_usuario_medico;
        this.servicio = response.id_servicio;
        this.hora = response.hora;
        this.citas = response.citas;
        this.dtTrigger.next(null); // Emitir el evento para actualizar los datos en la tabla
        console.log(response);
      },
      (error) => {
        console.error('Error al obtener los datos de la cita:', error);
      }
    );
  }

  eliminarCita(idCita: string) {
    // Aquí haz una solicitud HTTP DELETE para eliminar la cita correspondiente al ID de cita proporcionado
    // Por ejemplo:
    this.http.delete(`http://localhost/api/v1/citas/${idCita}`)
      .subscribe(() => {
        // Si la eliminación fue exitosa, actualiza la lista de citas
        this.obtenerDatosCita(this.idPaciente);
      });
      console.log(idCita);
  }

  detallesCita(idMedico: string, idServicio: string, hora: string, idCita: string,) {
    this.router.navigate(['app/administrativo/detalles-citas', idMedico, idServicio, hora, idCita]);
  }

}




