import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format } from 'date-fns';
import { AdministrativoServiceService } from '../administrativo-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-cita',
  templateUrl: './modificar-cita.component.html',
  styleUrls: ['./modificar-cita.component.css'],
})
export class ModificarCitaComponent implements OnInit {
  formularioCita!: FormGroup;
  idPaciente: string = '';
  // Definir las propiedades para almacenar los valores del formulario
  especialidad: string = '';
  nombreMedico: string = '';
  fechaCreacion: string = new Date().toISOString().split('T')[0];
  horasDisponibles: string = '';
  fechaCita:string ='';

  medicos: any[] = [];
  servicios: any[] = [];
  idMedico: string = '';
  idServicio: string = '';
  citaId: string = '';
  fecha:Date = new Date();
  confirmar: boolean = false; // Confirmar es la variable que determina si el administrativo se encuentra en el apartado de "confirmar datos".
  // Si esta en false, significa que no esta en "confirmar datos".
  enviarDatos: boolean = false;

  //Variable para controlar si se ha intentado enviar el formulario
  isSubmited: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private administrativoService: AdministrativoServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.formularioCita = this.formBuilder.group({
      horasDisponibles: [''],
      fechaCita: [''] 
    });
   

    this.route.queryParams.subscribe((params) => {
      this.idPaciente = params['id_usuario_paciente'];
     
    });

    this.route.params.subscribe((params) => {
      this.citaId = params['id_cita'];
      console.log('Id de la cita:', this.citaId); // Esto debería imprimir el ID de la cita correctamente

      


      // Aquí es donde debes llamar a tus métodos para obtener los médicos y servicios
      this.obtenerMedicos();
      this.obtenerServicios();
    });

    $("#fecha").attr('min', this.fecha.getFullYear() + '-' + (this.fecha.getMonth()+1) + '-' + this.fecha.getDate());
  }

  formatearFecha(fecha: Date): string {
    return format(fecha, 'dd/MM/yyyy');
  }

  

  siguiente() {
    if (!this.confirmar) {
      // Si el administrativo le da a siguiente y no se encuentra en "confirmar datos", el formulario se desactivará para confirmar los datos con el paciente
      // En caso de que confirmar este en true, se realizará el envio de los datos a la base de datos
      $('input').prop('disabled', true);
      $('select').prop('disabled', true);

      $('#flecha').addClass('border-3');
      $('#flecha').addClass('barra-inferior');

      $('#paso2').addClass('border-3');
      $('#paso2').addClass('barra-inferior');

      this.confirmar = true;
      this.enviarDatos = true;
      
    }
    this.modificarCita();
  }

  anterior() {
    // Si el administrativo le da a anterior, se habilitará el formulario para su edicion y retrocederá al apartado "Datos de la Cita"
    if (this.confirmar) {
      $('input').prop('disabled', false);
      $('select').prop('disabled', false);

      $('#flecha').removeClass('border-3');
      $('#flecha').removeClass('barra-inferior');

      $('#paso2').removeClass('border-3');
      $('#paso2').removeClass('barra-inferior');

      this.confirmar = false;
      this.enviarDatos = false;
    }
  }

  enviar() {
    console.log('enviado a base de datos');
    $('#botonPrueba').trigger('click');
  }

  obtenerMedicos(): void {
    this.administrativoService.obtenerMedicos().subscribe(
      (response) => {
        this.medicos = response;
      },
      (error) => {
        console.error('Error al obtener la lista de médicos:', error);
      }
    );
  }

  obtenerServicios(): void {
    this.administrativoService.obtenerServicios().subscribe(
      (response) => {
        if (response && response.results && Array.isArray(response.results)) {
          this.servicios = response.results;
        } else {
          console.error(
            'La respuesta de la API no contiene la propiedad "results" o no es un array.'
          );
        }
      },
      (error) => {
        console.error('Error al obtener la lista de servicios:', error);
      }
    );
  }

  obtenerIdMedico(event: any) {
    const selectedValue = event.target.value;
    this.idMedico = selectedValue;
  }

  obtenerIdServicio(event: any) {
    const selectedValue = event.target.value;
    this.idServicio = selectedValue;
  }

  modificarCita(): void {
    if (this.formularioCita.valid) {
      // Obtener la hora seleccionada
      const horasDisponiblesControl = this.formularioCita.get('horasDisponibles');
      const hora = horasDisponiblesControl ? horasDisponiblesControl.value : '';
  
      // Obtener la fecha seleccionada
      const fechaControl = this.formularioCita.get('fechaCita');
      const fecha = fechaControl ? fechaControl.value : '';
  
      const datosCita = {
        id_servicio: this.idServicio,
        id_usuario_medico: this.idMedico,
        hora: hora,
        fecha: fecha
      };
  
      console.log('Datos de la cita a enviar:', datosCita);
  
      this.administrativoService.modificarCita(datosCita, this.citaId).subscribe(
        (response) => {
          console.log('Cita modificada exitosamente', response);
        },
        (error) => {
          console.error('Error al modificar la cita', error);
        }
      );
    } else {
      console.error('El formulario o alguno de sus campos no es válido.');
    }
  }
  
  
  
  
  
  
}
