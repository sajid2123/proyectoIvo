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
    enviarDatos:boolean = false;
        

    cambiarSeccion(accion:string){
      let columnas = $("#seccionesFormulario").children();
      $(columnas[this.seccionFormulario]).removeClass("barra-inferior");
      $(columnas[this.seccionFormulario]).removeClass("border-3");

      switch(accion){
        case 'cancelar':
            this.seccionFormulario = 0;
        break;
        case 'retroceder':
          this.quitarBarra(this.seccionFormulario, columnas);
            this.seccionFormulario-=2;
            
            if (this.seccionFormulario != 2) {
              $(".col").find("input").prop("disabled", false);
              $("#direccion").prop("disabled", false);
              this.enviarDatos = false;
            } 
            $(columnas[this.seccionFormulario]).addClass("barra-inferior");
            $(columnas[this.seccionFormulario]).addClass("border-3");
        break;
        case 'avanzar':
          
            if (this.enviarDatos == true) {
              
              /*
                Aqui se hará el envio de datos con la API
              */

            } else {
              this.seccionFormulario+=2;
              this.meterBarra(this.seccionFormulario, columnas);
                if (this.seccionFormulario == 4) {
                  $(".col").find("input").prop("disabled", true);
                  $("#direccion").prop("disabled", true);
                  this.enviarDatos = true;
                } 
            }
        break;
        
      }
      $(columnas[this.seccionFormulario]).addClass("barra-inferior");
      $(columnas[this.seccionFormulario]).addClass("border-3");
    }

    meterBarra(posicion:number, entrada:JQuery<HTMLElement>){
        for (let index = 0; index < posicion; index++) {

          $('#'+entrada[index].id).addClass("barra-inferior");
          $('#'+entrada[index].id).addClass("border-3");
          console.log(entrada[index].id);
        }
    }

    quitarBarra(posicion:number, entrada:JQuery<HTMLElement>){
      for (let index = entrada.length-1; index > posicion; index--) {
        $('#'+entrada[index].id).removeClass("barra-inferior");
        $('#'+entrada[index].id).removeClass("border-3");
        console.log(entrada[index].id);
      }
  }
}
