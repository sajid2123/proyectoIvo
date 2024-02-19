import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-atender-paciente',
  templateUrl: './atender-paciente.component.html',
  styleUrls: ['./atender-paciente.component.css'],
})
export class AtenderPacienteComponent {
  constructor(private route: ActivatedRoute){}


  idUsaurio = localStorage.getItem('id_usuario');
  nombreCompleto: String = "";
  

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombreCompleto = params['nombre'] + ' ' + params['apellido']; 
    })
  }
}
