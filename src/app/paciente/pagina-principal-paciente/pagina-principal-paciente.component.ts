import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-principal-paciente',
  templateUrl: './pagina-principal-paciente.component.html',
  styleUrls: ['./pagina-principal-paciente.component.css']
})
export class PaginaPrincipalPacienteComponent {
  tipoCita: 'pendiente' | 'realizada' = 'pendiente'; // Inicialmente seleccionado como pendiente

  routaPendiente = '/paciente/tabla-pendiente';
  routaRealizada = '/paciente/tabla-realizada';
  
cambiarTipoCita(tipo: 'pendiente' | 'realizada') {
  this.tipoCita = tipo;
}

  citasPendientes: any[] = [
    { fecha: 20, medico: 'Juan', servicio: 25, hora: '9:00' },
    { fecha: 20, medico: 'Pere', servicio: 25, hora: '9:00' },
    { fecha: 20, medico: 'Pepe', servicio: 25, hora: '9:00' },
    // Puedes agregar más objetos según tus necesidades
  ];

  citasRealizadas: any[] = [
   
    { fecha: 20, medico: 'Manolo', servicio: 25, hora: '9:00' },
    { fecha: 20, medico: 'Pere', servicio: 25, hora: '9:00' },
    { fecha: 20, medico: 'Pepe', servicio: 25, hora: '9:00' },
  ];
}
