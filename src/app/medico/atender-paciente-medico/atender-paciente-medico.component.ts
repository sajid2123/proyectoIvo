import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atender-paciente-medico',
  templateUrl: './atender-paciente-medico.component.html',
  styleUrls: ['./atender-paciente-medico.component.css']
})
export class AtenderPacienteMedicoComponent {

  activeTab: string = "diagnosticar";
  id_paciente!: number;
  constructor(private route: ActivatedRoute){}


  nombreCompleto: String = "";
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombreCompleto = params['nombre'] + ' ' + params['apellido']; 
      this.id_paciente = params['id_paciente'];
    })
  }

  recibirDato(activeTab: string){
    this.activeTab = activeTab;
    console.log(activeTab);
  }
}
