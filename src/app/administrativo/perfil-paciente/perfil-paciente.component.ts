import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdministrativoServiceService } from '../administrativo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.css']
})
export class PerfilPacienteComponent {
    poderEditar:boolean = false;
    idPaciente: string = '';
    dni:String = '';
    nombre:String = '';
    apellido1:String = '';
    apellido2:String = '';
    sexo:String = '';
    fecha:String = '';
    correo:String = '';
    telefono:String = '';
    codigoPostal:String = '';
    direccion:String = '';

    constructor(private route: ActivatedRoute, private http: HttpClient, private administrativoService: AdministrativoServiceService) {}

    ngOnInit(): void {
      //Obtener el ID del paciente
      this.route.params.subscribe((params) => {
        this.idPaciente = params['id_paciente'];
        //Llamar a la API para obtener los detalles del paciente
        this.obtenerDatosPaciente(this.idPaciente);
      });
    }

    // Si esto esta en falso, quiere decir que se mostrarán los datos pero NO pondran ser editados.

    editar(entrada:boolean){ // Si poderEditar es falso, cambiara a true y el administrativo podrá modificar los datos del paciente
      if (entrada == false) {
        this.poderEditar = true;

        $("input").prop("readonly", false);

      } else { // En caso contrario, el administrativo solo podrá verlo mas no editarlo
        this.poderEditar = false;
        $("input").prop("readonly", true);
      }

    }

    obtenerDatosPaciente(idPaciente: String): void {
      this.http
        .get<any>(`http://localhost/api/v1/pacientes/${idPaciente}`)
        .subscribe(
          (response) => {
            this.idPaciente = response.id_usuario_paciente;
            this.dni = response.usuario.dni;
            this.nombre = response.usuario.nombre;
            this.apellido1 = response.usuario.apellido1;
            this.apellido2 = response.usuario.apellido2;
            this.sexo = response.usuario.Sexo;
            this.fecha = response.usuario.fecha_nacimiento;
            this.codigoPostal = response.usuario.codigo_postal;
            this.direccion = response.usuario.direccion;
            this.telefono = response.usuario.telefono;
            this.correo = response.usuario.correo;

            console.log(this.dni);
            console.log(this.nombre);
            console.log(this.apellido1);
            console.log(this.apellido2);
            console.log(this.sexo);
            console.log(this.fecha);
            console.log(this.codigoPostal);
            console.log(this.direccion);
            console.log(this.telefono);
            console.log(idPaciente);
          },
          (error) => {
            console.error('Error al obtener el nombre del paciente:', error);
          }
        );
    }

    guardarCambios(): void {
      const datosActualizados = {
        dni: this.dni,
        nombre: this.nombre,
        apellido1: this.apellido1,
        apellido2: this.apellido2,
        sexo: this.sexo,
        fecha_nacimiento: this.fecha,
        codigoPostal: this.codigoPostal,
        direccion: this.direccion,
        telefono: this.telefono,
        correo: this.correo
      };

      this.administrativoService.actualizarDatosPaciente(this.idPaciente, datosActualizados)
        .subscribe(
          response => {
            console.log('Datos del paciente actualizados con éxito:', response);
          },
          error => {
            console.error('Error al actualizar los datos del paciente:', error);
          }
        );
    }

}
