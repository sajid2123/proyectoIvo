import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { inject } from '@angular/core';
import { AdministrativoServiceService } from '../administrativo-service.service';
import { error } from 'jquery';
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
    nombreSeccionFormulario:string = 'datosPersonales';
    formulario:FormGroup;
    id_paciente!:string;
  servicio = inject(AdministrativoServiceService);

    constructor(fb:FormBuilder){

      this.formulario = fb.group({
          datosPersonales: fb.group({
            dni: ['', [Validators.required]],
            nombre: ['', [Validators.required]],
            apellido1: ['', [Validators.required]],
            apellido2: ['', [Validators.required]],
            sexo: ['', [Validators.required]],
            fechaNacimiento: ['', [Validators.required]],
            telefono: ['', [Validators.required, Validators.minLength(9)]],
            correo: ['', [Validators.required, Validators.email]],
            codigoPostal: ['', [Validators.required, Validators.min(10000), Validators.max(99999)]],
            direccion: ['', [Validators.required]],
          }),
          cuenta:fb.group({
            usuario: ['', Validators.required],
            email2: ['', Validators.email],
            contrasena: ['', Validators.required],
            contrasena2: ['', Validators.required],
            rol: ['3']
          })
      })
    }

    passwordIguales(contra1:string, contra2:string){
        if (contra1 == contra2) {
          return true;
        } else {
          return false;
        }
    }

    cambiarSeccion(accion:string, puedeAvanzar:boolean){

      if (this.seccionFormulario == 2 && !this.passwordIguales(this.formulario.get('cuenta')?.get('contrasena')?.value, this.formulario.get('cuenta')?.get('contrasena2')?.value) == true) {
        puedeAvanzar = false;
      } 

      $("#correoCuenta").prop("disabled", true);

      this.formulario.get('cuenta')?.get('email2')?.setValue(this.formulario.get('datosPersonales')?.get('correo')?.value);
      this.formulario.get('cuenta')?.get('email2')?.disable;
      let columnas = $("#seccionesFormulario").children();
      $(columnas[this.seccionFormulario]).removeClass("barra-inferior");
      $(columnas[this.seccionFormulario]).removeClass("border-3");

      if (puedeAvanzar && accion != "retroceder") {
      switch(accion){
        
        case 'avanzar':
          
            if (this.enviarDatos == true) {
              
             this.subirPaciente();

            } else { 
              this.seccionFormulario+=2;
              this.meterBarra(this.seccionFormulario, columnas);
                if (this.seccionFormulario == 4) {
                  $(".col").find("input").prop("disabled", true);
                  $(".col").find("select").prop("disabled", true);
                  $("#direccion").prop("disabled", true);
                  this.enviarDatos = true;
                } 
            }

        break;
      }

      } else if(accion == "retroceder"){
            this.enviarDatos = false;
            this.quitarBarra(this.seccionFormulario, columnas);
            this.seccionFormulario-=2;
            
            if (this.seccionFormulario != 2) {
              $(".col").find("input").prop("disabled", false);
              $("#direccion").prop("disabled", false);
              $(".col").find("select").prop("disabled", false);
            } 

      } else if(accion == "cancelar"){
            this.seccionFormulario = 0;
      }

      this.conocerNombreSeccionFormulario(this.seccionFormulario);

      $(columnas[this.seccionFormulario]).addClass("barra-inferior");
      $(columnas[this.seccionFormulario]).addClass("border-3");

      console.log(this.formulario.get('datosPersonales')?.get('dni')?.value);
    }

    conocerNombreSeccionFormulario(entrada:number){
      switch(entrada){
        case 0:
          this.nombreSeccionFormulario = "datosPersonales";
        break;
        case 2:
          this.nombreSeccionFormulario = "cuenta";
        break;
      }
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

  async subirPaciente(){

    const paciente = {
      dni: this.formulario.get('datosPersonales')?.get('dni')?.value,
      nombre:  this.formulario.get('datosPersonales')?.get('nombre')?.value,
      apellido1: this.formulario.get('datosPersonales')?.get('apellido1')?.value,
      apellido2: this.formulario.get('datosPersonales')?.get('apellido2')?.value,
      Sexo: this.formulario.get('datosPersonales')?.get('sexo')?.value,
      fecha_nacimiento: this.formulario.get('datosPersonales')?.get('fechaNacimiento')?.value,
      telefono: this.formulario.get('datosPersonales')?.get('telefono')?.value,
      correo: this.formulario.get('datosPersonales')?.get('correo')?.value,
      codigo_postal: this.formulario.get('datosPersonales')?.get('codigoPostal')?.value,
      direccion: this.formulario.get('datosPersonales')?.get('direccion')?.value,
      nombre_cuenta: this.formulario.get('cuenta')?.get('usuario')?.value,
      password: this.formulario.get('cuenta')?.get('contrasena')?.value,
      id_rol: this.formulario.get('cuenta')?.get('rol')?.value,
    }
    
    this.servicio.darAltaPaciente(paciente).subscribe(
      (response) => {
        console.log('Usuario creado exitosamente: ', response);

        const datos = {
          dni_paciente: this.formulario.get('datosPersonales')?.get('dni')?.value,
          id_admin: localStorage.getItem("id_usuario"),
          sip: this.randomInt(100000000, 999999999),
        }

        this.servicio.enlazarAdministrativoConPacienteRecientementeCreado(datos).subscribe(
          (response) => {
            console.log("id de paciente: " + response);
            this.id_paciente = response;
          },
          (error) => {
            console.error('Error: ', error);
          }
        );
      },
      (error) => {
        console.error('Error: ', error)
      }
    );
    
  }

  randomInt(min:number, max:number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
}
