import { Component } from '@angular/core';
import { CitaDataService } from '../cita-data.service';
import { format } from 'date-fns';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css'],
})
export class CrearCitasComponent {
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
}

/*
    this.isSubmited = true;
    // Verificar si algún campo está vacío
    if (!this.especialidad || !this.nombreMedico || !this.fechaCreacion || !this.horasDisponibles) {

      return;
    }

    const fechaFormateada = this.formatearFecha(new Date(this.fechaCreacion));

    //Asignar los datos del formulario al objeto datosCita en el servicio
    this.citaDataService.datosCita = {
      especialidad: this.especialidad,
      nombreMedico: this.nombreMedico,
      fechaCreacion: fechaFormateada,
      horasDisponibles: this.horasDisponibles,
    };

    // Permitir la navegación si todos los campos están llenos
    this.router.navigate(['/administrativo/confirmar-citas']);
  }
*/

