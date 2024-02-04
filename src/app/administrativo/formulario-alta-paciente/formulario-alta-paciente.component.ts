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
      let columnas = $("#seccionesFormulario").find("div.col-4");
      $(columnas[this.seccionFormulario]).removeClass("bg-success");

      switch(accion){
        case 'cancelar':
            this.seccionFormulario = 0;
        break;
        case 'retroceder':
            this.seccionFormulario--;
            if (this.seccionFormulario != 2) {
              $(".col").find("input").prop("readonly", false);
            } 
            $(columnas[this.seccionFormulario]).addClass("bg-success");
        break;
        case 'avanzar':
            this.seccionFormulario++;
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
      $(columnas[this.seccionFormulario]).addClass("bg-success");
    }
}
