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
  nombreCompleto: string = "";

  id_paciente!: number;
  id_cita!: number;
  estado!: string;
  

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombreCompleto = params['nombre'] + ' ' + params['apellido']; 
      this.id_paciente = params['id_paciente'];
      this.id_cita = params['id_cita'];
      this.estado = params['estado'];
    })
  }
}
