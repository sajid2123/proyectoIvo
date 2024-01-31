import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.css']
})
export class PerfilPacienteComponent {

    poderEditar:boolean = false;

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

}
