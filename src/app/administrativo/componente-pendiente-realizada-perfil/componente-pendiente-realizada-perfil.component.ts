import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente-pendiente-realizada-perfil',
  templateUrl: './componente-pendiente-realizada-perfil.component.html',
  styleUrls: ['./componente-pendiente-realizada-perfil.component.css']
})
export class ComponentePendienteRealizadaPerfilComponent {
    
    ventanaAMostrar:string = '';

    @Output() ventana = new EventEmitter<string>();

    cambiarVentana(tipoDeVentana:string){
      this.ventanaAMostrar = tipoDeVentana;
      console.log(this.ventanaAMostrar);
      this.ventana.emit(this.ventanaAMostrar);
    }
}
