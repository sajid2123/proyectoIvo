import { Component ,Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-tabs-atender-paciente',
  templateUrl: './tabs-atender-paciente.component.html',
  styleUrls: ['./tabs-atender-paciente.component.css']
})
export class TabsAtenderPacienteComponent {
  @Input() routaPendiente!: string;
  @Input() routaRealizada!: string;
  activeTab: string = "diagnosticar";

  @Output() datoEnviado = new EventEmitter<string>(); // Puedes reemplazar 'any' con un tipo de datos específico

 
 

  constructor() {}
  
  setActiveTab(activeTab: string){
    this.activeTab = activeTab;
  }
  enviarDatoAlPadre(activeTab: string) {
    this.datoEnviado.emit(activeTab);
  }
}
