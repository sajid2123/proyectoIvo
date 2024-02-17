import { Component, OnInit } from '@angular/core';
import { CitaDataService } from '../cita-data.service';
import { format } from 'date-fns';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css'],
})
export class CrearCitasComponent {
  formularioCita: FormGroup;
  idPaciente: string = '';
  sipPaciente: string= '';
  idUsuarioAdministrativo: string = '';
  idUsuarioPaciente: string = '';
  nombrePaciente: string = '';
  medicos: any[] = [];
  servicios: any[] = [];
  idMedico: String = '';
  idServicio: String = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder) {
    this.formularioCita = this.formBuilder.group({
      especialidad: ['', Validators.required],
      fechaCreacion: [new Date().toISOString().split('T')[0], Validators.required],
      nombreMedico: ['', Validators.required],
      horasDisponibles: ['', Validators.required],
    });
  }

  confirmar:boolean = false; // Confirmar es la variable que determina si el administrativo se encuentra en el apartado de "confirmar datos".
                             // Si esta en false, significa que no esta en "confirmar datos".
  enviarDatos:boolean = false;

  //Variable para controlar si se ha intentado enviar el formulario
  isSubmited: boolean = false;

  formatearFecha(fecha: Date): string {
    return format(fecha, 'dd/MM/yyyy');
  }

  siguiente() {
    if (this.confirmar) {
        this.crearCita();
    } else {
        // Si el administrativo le da a siguiente y no se encuentra en "confirmar datos", el formulario se desactivará para confirmar los datos con el paciente
        // En caso de que confirmar este en true, se realizará el envio de los datos a la base de datos
        $("input").prop("disabled", true);
        $("select").prop("disabled", true);
        $("#flecha").addClass("border-3 border-warning");
        $("#paso2").addClass("border-3 border-warning");
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
        this.sipPaciente = response.sip


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
        this.medicos = response;

      },
      (error) => {
        console.error('Error al obtener la lista de médicos:', error);
      }
    );
  }

  obtenerServicios(): void {
    this.http.get<any>('http://localhost/api/v1/servicios').subscribe(
      (response) => {
        // Verificar si existe la propiedad 'results' en la respuesta
        if (response && response.results && Array.isArray(response.results)) {
          // Asignar el array de servicios dentro de 'results' a this.servicios
          this.servicios = response.results;
        } else {
          console.error('La respuesta de la API no contiene la propiedad "results" o no es un array.');
        }
      },
      (error) => {
        console.error('Error al obtener la lista de servicios:', error);
      }
    );
  }

  crearCita() {
    // Obtener el valor de cada campo del formulario por separado
    const especialidad = this.formularioCita.get('especialidad')?.value;
    const nombreMedico = this.formularioCita.get('nombreMedico')?.value;
    const horasDisponibles = this.formularioCita.get('horasDisponibles')?.value;

    const fechaActual = new Date();
    const fechaFormateada = `${fechaActual.getFullYear()}-${(fechaActual.getMonth() + 1).toString().padStart(2, '0')}-${fechaActual.getDate().toString().padStart(2, '0')}`;

    // Verificar si el formulario es válido antes de obtener los valores
    if (this.formularioCita.valid) {
        console.log("-------------------");
        console.log('Id del servicio:', this.idServicio);
        console.log('Nombre del Médico:', nombreMedico);
        console.log('Horas Disponibles:', fechaFormateada + ' ' + horasDisponibles+':00');
        console.log('Id del paciente: ', this.idPaciente);
        console.log('Sip del paciente: ', this.sipPaciente);
        console.log('Id administrativo: ', this.idUsuarioAdministrativo);

        const crear = {
            id_usuario_paciente: this.idPaciente,
            hora: fechaFormateada + ' ' + horasDisponibles+':00',
            sip: this.sipPaciente,
            id_servicio: this.idServicio,
            id_usuario_medico: this.idMedico,
            id_usuario_administrativo: this.idUsuarioAdministrativo,

        }

        //Enviar los datos de la cita a la URL
        this.http.post<any>('http://localhost/api/v1/crear-citas', crear).subscribe(
            response => {
                console.log('Cita creada exitosamente:', response);

            },
            error => {
                console.error('Error al crear la cita:', error);

            }
        );

    } else {
        console.error('El formulario no es válido. No se pueden obtener los valores.');
    }
}

  //Metodo para obtener el id del medico mediante desplegable
  obtenerIdMedico(event: any) {
    const selectedValue = event.target.value;
    this.idMedico = selectedValue;
  }

  //Metodo para obtener el id del servicio mediante desplegable
  obtenerIdServicio(event: any) {
    const selectedValue = event.target.value;
    this.idServicio = selectedValue;
  }




  ngOnInit(): void {
    // Inicializar el formulario dentro del ngOnInit
    this.formularioCita = this.formBuilder.group({
      especialidad: ['', Validators.required], // Definir un FormControl para cada campo del formulario
      fechaCreacion: [new Date().toISOString().split('T')[0], Validators.required],
      nombreMedico: ['', Validators.required],
      horasDisponibles: ['', Validators.required],
    });

    // Obtener el id_usuario_paciente de los parámetros de la URL
    this.route.queryParams.subscribe((params) => {
      this.idPaciente = params['id_usuario_paciente'];

      // Llamar a la API para obtener los detalles del paciente
      this.obtenerDatosPaciente(this.idPaciente);
    });
    this.obtenerMedicos();
    this.obtenerServicios();
  }

}



