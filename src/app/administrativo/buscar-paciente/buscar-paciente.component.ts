import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

interface ApiResponse {
  pacientes: any[]; // Puedes definir una interfaz más específica para los pacientes si lo deseas
}

@Component({
  selector: 'app-buscar-paciente',
  templateUrl: './buscar-paciente.component.html',
  styleUrls: ['./buscar-paciente.component.css']
})
export class BuscarPacienteComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  resultados: any[] = [];

  dni: string = '';
  nombre: string = '';
  sip: string = '';
  apellido: string = '';
  buscando: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.dtOptions = {
      retrieve: true,
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthChange: false,
      language: {
        info: ' ', // Personalizar el mensaje
        paginate: {
          first: '',
          last: '',
          next: 'Siguiente',
          previous: 'Anterior'
        }
      },
    };
  }

  id_admin = localStorage.getItem('id_usuario');

  buscarPaciente(): void {
    this.buscando = true;
    this.http.get<ApiResponse>(`http://localhost/api/v1/pacientes?id_usuario_administrativo=${this.id_admin}`).subscribe(
      response => {
        const pacientes = response.pacientes;
        if (Array.isArray(pacientes)) {
          this.resultados = pacientes.map(paciente => {
            const usuario = paciente.usuario;
            return {
              id_usuario_paciente: paciente.id_usuario_paciente, // Añadir el ID del paciente a los resultados
              nombre_usuario: usuario.nombre,
              apellido_usuario: usuario.apellido1,
              dni_usuario: usuario.dni,
              sip_usuario: paciente.sip,
            };
          });
          this.dtTrigger.next(null);
        }
      },
      error => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  navegarAPaciente(idPaciente: string): void {
    console.log('ID del paciente:', idPaciente);
    const url = `/app/administrativo/paciente/:id_paciente=${idPaciente}`;
    this.router.navigateByUrl(url);

    console.log(`Click sobre ${idPaciente}`);
    console.log(url);
}






}
