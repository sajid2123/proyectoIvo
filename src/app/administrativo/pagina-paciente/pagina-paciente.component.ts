import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina-paciente',
  templateUrl: './pagina-paciente.component.html',
  styleUrls: ['./pagina-paciente.component.css'],
})
export class PaginaPacienteComponent implements OnInit {
  citas: string = 'citas-pendientes';
  ventana: string = 'Citas';
  nombrePaciente: string = '';
  idPaciente: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    //Obtener el ID del paciente de los parámetros de la ruta
    this.route.params.subscribe((params) => {
      this.idPaciente = params['id_paciente']; // Asigna el ID del paciente a la variable idPaciente
      //Llamar a la API para obtener los detalles del paciente
      this.obtenerNombrePaciente(this.idPaciente);
    });
  }

  obtenerNombrePaciente(idPaciente: string): void {
    this.http
      .get<any>(`http://localhost/api/v1/pacientes/${idPaciente}`)
      .subscribe(
        (response) => {
          this.nombrePaciente = response.usuario.nombre;
          console.log(this.nombrePaciente);
        },
        (error) => {
          console.error('Error al obtener el nombre del paciente:', error);
        }
      );
  }

  navegarACrearCita(): void {
    const url = `/app/administrativo/crear-citas?id_usuario_paciente=${this.idPaciente}`;

    this.router.navigateByUrl(url);

    console.log(`Click sobre`);
    console.log(url);
  }




}
