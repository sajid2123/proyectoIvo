import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';

@Component({
  selector: 'app-atender-paciente-medico',
  templateUrl: './atender-paciente-medico.component.html',
  styleUrls: ['./atender-paciente-medico.component.css']
})
export class AtenderPacienteMedicoComponent {

  activeTab: string = "diagnosticar";
  id_paciente!: number;
  estado = "";
  constructor(private route: ActivatedRoute){}
  textoModal = "";
  nombreCompleto: String = "";
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombreCompleto = params['nombre'] + ' ' + params['apellido']; 
      this.id_paciente = params['id_paciente'];
      this.estado = params['estado'];
      
      if (this.estado == "pendiente") {
          this.textoModal = 'Diagnostico creado';
      } else if(params['estado'] == "realizada"){
        this.textoModal = 'Diagnostico modificado';
      } 
    })
  }

  recibirDato(activeTab: string){
    this.activeTab = activeTab;

    if (activeTab == "volante") {
      this.textoModal = 'Volante generado';
    } else if (this.estado == "pendiente") {
      this.textoModal = 'Diagnostico creado';
    } else if(this.estado == "realizada"){
      this.textoModal = 'Diagnostico modificado';
    } 

    console.log(activeTab);
  }
}
