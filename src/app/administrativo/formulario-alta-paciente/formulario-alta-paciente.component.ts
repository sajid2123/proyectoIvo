import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-alta-paciente',
  templateUrl: './formulario-alta-paciente.component.html',
  styleUrls: ['./formulario-alta-paciente.component.css']
})
export class FormularioAltaPacienteComponent {
    seccionFormulario:number = 0; // El numero representa en que punto del formulario te encuentras en ese momento 
                                  // 0 -> Datos Personales | 1 -> Crear Cuenta | 2 -> Confirmar Datos |
                                  // Este valor incrementaria con el boton "Siguiente" y decrementaria con el boton "Anterior"
                                  
    cambiarSeccion(accion:string){
      let confirmar:boolean = false;
      let columnas = $("#seccionesFormulario").children();
      $(columnas[this.seccionFormulario]).removeClass("border-warning");
      $(columnas[this.seccionFormulario]).removeClass("border-3");
      switch(accion){
        case 'cancelar':
            this.seccionFormulario = 0;
        break;
        case 'retroceder':
          this.quitarBarra(this.seccionFormulario, columnas);
            this.seccionFormulario-=2;
            
            if (this.seccionFormulario != 2) {
              $(".col").find("input").prop("readonly", false);
            } 
            $(columnas[this.seccionFormulario]).addClass("border-warning");
            $(columnas[this.seccionFormulario]).addClass("border-3");
        break;
        case 'avanzar':
          
            this.seccionFormulario+=2;
            this.meterBarra(this.seccionFormulario, columnas);
            if (this.seccionFormulario == 2) {
              $(".col").find("input").prop("readonly", true);
            } 
        break;
        case 'cofirmar':
          confirmar = true
            /*
            En este punto, haria atacaria a la API para poder agregar los datos proporcionados en el formulario
            */
        break;
      }
      $(columnas[this.seccionFormulario]).addClass("border-warning");
      $(columnas[this.seccionFormulario]).addClass("border-3");
    }

    meterBarra(posicion:number, entrada:JQuery<HTMLElement>){
        for (let index = 0; index < posicion; index++) {

          $('#'+entrada[index].id).addClass("border-warning");
          $('#'+entrada[index].id).addClass("border-3");
          console.log(entrada[index].id);
        }
    }

    quitarBarra(posicion:number, entrada:JQuery<HTMLElement>){
      for (let index = entrada.length-1; index > posicion; index--) {
        $('#'+entrada[index].id).removeClass("border-warning");
        $('#'+entrada[index].id).removeClass("border-3");
        console.log(entrada[index].id);
      }
  }
}
