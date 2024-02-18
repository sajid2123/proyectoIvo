import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalles-cita',
  templateUrl: './detalles-cita.component.html',
  styleUrls: ['./detalles-cita.component.css']
})
export class DetallesCitaComponent implements OnInit {
  idMedico: string = '';
  idServicio: string = '';
  fecha: string = '';
  hora: string = '';
  idCita:string = '';

  mostrarConfirma: boolean = false;

  constructor(private route: ActivatedRoute,private http: HttpClient ,private router: Router) {}



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idMedico = params.get('idMedico') ?? '';
      this.idServicio = params.get('idServicio') ?? '';
      this.idCita = params.get('idCita') ?? '';
      const fechaHora = params.get('hora') ?? '';

      //Parsear la fecha
      const fecha = new Date(fechaHora);
      //Obtener el nombre del día
      const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      const diaSemana = diasSemana[fecha.getDay()];
      //Obtener el nombre del mes
      const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
      const mes = meses[fecha.getMonth()];
      //Formatear la fecha
      this.fecha = `${diaSemana} ${fecha.getDate()} de ${mes} de ${fecha.getFullYear()}`;
      // signar la hora
      this.hora = fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      console.log("Medico:", this.idMedico);
      console.log("Servicio:", this.idServicio);
      console.log("Fecha:", this.fecha);
      console.log("Hora:", this.hora);
    });
  }

  confirmarAnulacion() {
    this.mostrarConfirma = true;

  }


  confirmarEliminacion() {
    // Oculta el modal de confirmación
    this.mostrarConfirma = false;
   
    // Aquí realizas la eliminación de la cita
    this.http.delete(`http://localhost/api/v1/citas/${this.idCita}`)
      .subscribe(() => {
        console.log('Cita eliminada correctamente');
      });
  }




}
