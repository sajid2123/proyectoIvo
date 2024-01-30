import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-pendiente-realizada-perfil',
  templateUrl: './componente-pendiente-realizada-perfil.component.html',
  styleUrls: ['./componente-pendiente-realizada-perfil.component.css']
})
export class ComponentePendienteRealizadaPerfilComponent {
    
    @Input() cita:string = '';

    mostrar(tipoDeVentana:string){
      this.cita = tipoDeVentana;
      console.log(this.cita);
    }
    
}
