import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrativoServiceService } from '../administrativo-service.service';

@Component({
  selector: 'app-tabla-citas-realizadas',
  templateUrl: './tabla-citas-realizadas.component.html',
  styleUrls: ['./tabla-citas-realizadas.component.css']
})
export class TablaCitasRealizadasComponent implements OnInit {

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
  estado: string = 'realizada'; 
  medico: string = '';
  resultado:any;

  constructor(private route: ActivatedRoute, private router: Router, private administrativoService: AdministrativoServiceService) {}

  ngOnInit(): void {
    this.dtOptions = {
      retrieve: true,
      pagingType: "numbers",
      pageLength: 10,
      searching: false,
      lengthChange: false,
      info: false,
    };

    this.dtOptions.language = {
      ...this.dtOptions.language,
      zeroRecords: 'No se encontraron registros'
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
        this.citas = response.citas.filter((cita: any) => cita.estado === 'realizada').map((cita: any) => ({
          ...cita,
          nombreMedico: cita.nombre_medico
        }));

  
        this.dtTrigger.next(null);
        this.resultado = response
      },
      (error) => {
        console.error('Error al obtener los datos de la cita:', error);
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

  detallesCita(nombreMedico: string, nombreServicio: string, hora: string, fecha:string, idCita: string, idPaciente:string) {
    this.router.navigate(['app/administrativo/detalles-citas', nombreMedico, nombreServicio, hora,fecha, idCita, idPaciente]);
  }

  modificarCita(idCita: string, idPaciente:string): void {
    const url = `/app/administrativo/modificar-citas/${idCita}?id_usuario_paciente=${idPaciente}`;
    this.router.navigateByUrl(url);
    console.log(`Click sobre`);
    console.log(url);
  }

}
