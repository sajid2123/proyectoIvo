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

  //Variable para controlar si se ha intentado enviar el formulario
  isSubmited: boolean = false;

  formatearFecha(fecha: Date): string {
    return format(fecha, 'dd/MM/yyyy');
  }

  siguiente() {

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


  constructor(private router: Router, private citaDataService: CitaDataService) {}

}
