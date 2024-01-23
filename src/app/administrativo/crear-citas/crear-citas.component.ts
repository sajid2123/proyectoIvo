// crear-citas.component.ts

import { Component } from '@angular/core';
import { CitaDataService } from '../cita-data.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css'],
})
export class CrearCitasComponent {
  //Definir las propiedades para almacenar los valores del formulario
  especialidad: string = '';
  nombreMedico: string = '';
  fechaCreacion: Date = new Date;
  horasDisponibles: string = '';

  formatearFecha(fecha: Date): string {
    return format(fecha, 'dd/MM/yyyy');
  }

  siguiente() {
    const fechaFormateada = this.formatearFecha(this.fechaCreacion);

    //Asignar los datos del formulario al objeto datosCita en el servicio
    this.citaDataService.datosCita = {
      especialidad: this.especialidad,
      nombreMedico: this.nombreMedico,
      fechaCreacion: fechaFormateada,
      horasDisponibles: this.horasDisponibles,
    };

  }

  constructor(private citaDataService: CitaDataService) {}

}
