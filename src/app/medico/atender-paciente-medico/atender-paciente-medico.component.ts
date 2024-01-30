import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atender-paciente-medico',
  templateUrl: './atender-paciente-medico.component.html',
  styleUrls: ['./atender-paciente-medico.component.css']
})
export class AtenderPacienteMedicoComponent {

  activeTab: string = "diagnosticar";

  constructor(private route: ActivatedRoute){}


  nombreCompleto: String = "";
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombreCompleto = params['nombre'] + ' ' + params['apellido']; 
    })
  }

  recibirDato(activeTab: string){
    this.activeTab = activeTab;
    console.log(activeTab);
  }
}
