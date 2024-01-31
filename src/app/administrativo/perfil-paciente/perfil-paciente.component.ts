import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.css']
})
export class PerfilPacienteComponent {

    mostrarDatosPaciente:boolean = false; // Si esto esta en falso, quiere decir que se mostrarán los datos pero NO pondran ser editados.

}
