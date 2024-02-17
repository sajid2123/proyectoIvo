import { Component, OnInit } from '@angular/core';
import { CitaDataService } from '../cita-data.service';
import { format } from 'date-fns';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css'],
})
export class CrearCitasComponent {
  idPaciente: string = '';
  idUsuarioAdministrativo: string = '';
  idUsuarioPaciente: string = '';
  nombrePaciente: string = '';
  medicos: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  // Definir las propiedades para almacenar los valores del formulario
  especialidad: string = '';
  nombreMedico: string = '';
  fechaCreacion: string = new Date().toISOString().split('T')[0];
  horasDisponibles: string = '';

  confirmar:boolean = false; // Confirmar es la variable que determina si el administrativo se encuentra en el apartado de "confirmar datos".
                             // Si esta en false, significa que no esta en "confirmar datos".
  enviarDatos:boolean = false;

  //Variable para controlar si se ha intentado enviar el formulario
  isSubmited: boolean = false;

  formatearFecha(fecha: Date): string {
    return format(fecha, 'dd/MM/yyyy');
  }

  siguiente() {
    if (!this.confirmar) { // Si el administrativo le da a siguiente y no se encuentra en "confirmar datos", el formulario se desactivará para confirmar los datos con el paciente
                           // En caso de que confirmar este en true, se realizará el envio de los datos a la base de datos
      $("input").prop("disabled", true);
      $("select").prop("disabled", true);

      $("#flecha").addClass("border-3");
      $("#flecha").addClass("border-warning");

      $("#paso2").addClass("border-3");
      $("#paso2").addClass("border-warning");

      this.confirmar = true;
      this.enviarDatos = true;
    }
  }

  anterior(){ // Si el administrativo le da a anterior, se habilitará el formulario para su edicion y retrocederá al apartado "Datos de la Cita"
    if (this.confirmar) {
      $("input").prop("disabled", false);
      $("select").prop("disabled", false);

      $("#flecha").removeClass("border-3");
      $("#flecha").removeClass("border-warning");

      $("#paso2").removeClass("border-3");
      $("#paso2").removeClass("border-warning");

      this.confirmar = false;
      this.enviarDatos = false;
    }
  }

  enviar(){
    console.log("enviado a base de datos");
    $("#botonPrueba").trigger("click");
  }



  obtenerDatosPaciente(idPaciente: string): void {
    // Hacer la llamada a la API para obtener los detalles del paciente
    this.http.get<any>(`http://localhost/api/v1/pacientes/${idPaciente}`).subscribe(
      (response) => {
        this.nombrePaciente = response.usuario.nombre;
        this.idUsuarioAdministrativo = response.id_usuario_administrativo
        this.idUsuarioPaciente = response.id_usuario_paciente


        console.log('Nombre del paciente:', this.nombrePaciente);
        console.log('Id del administrativo:', this.idUsuarioAdministrativo);
        console.log('Id del paciente:', this.idUsuarioPaciente);

      },
      (error) => {
        console.error('Error al obtener el nombre del paciente:', error);
      }
    );
  }

  obtenerMedicos(): void {
    this.http.get<any>('http://localhost/api/v1/medicos').subscribe(
      (response) => {
        this.medicos = response; // Suponiendo que la respuesta de la API es un array de objetos con los detalles de los médicos
      },
      (error) => {
        console.error('Error al obtener la lista de médicos:', error);
      }
    );
  }

  ngOnInit(): void {
    // Obtener el id_usuario_paciente de los parámetros de la URL
    this.route.queryParams.subscribe((params) => {
      this.idPaciente = params['id_usuario_paciente'];

      // Llamar a la API para obtener los detalles del paciente
      this.obtenerDatosPaciente(this.idPaciente);
    });
    this.obtenerMedicos();
  }

}



