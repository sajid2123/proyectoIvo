import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-pendiente-realizada',
  templateUrl: './componente-pendiente-realizada.component.html',
  styleUrls: ['./componente-pendiente-realizada.component.css']
})
export class ComponentePendienteRealizadaComponent {
  @Input() routaPendiente!: string;
  @Input() routaRealizada!: string;
  @Input() activeTab: string = 'pendiente';
 

  constructor() {}

  setActiveTab(tabName: string):void {
    this.activeTab = tabName;
  }
}
