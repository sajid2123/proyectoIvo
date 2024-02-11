import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicioService } from 'src/app/api-servicio.service';
import { Injectable, inject } from '@angular/core';


@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})
export class PaginaLoginComponent {
    formulario!: FormGroup;

    servicio = inject(ApiServicioService);

    constructor(){
      this.formulario = new FormGroup({
        correo: new FormControl(),
        password: new FormControl()
      })
    }

    async onSubmit(){
      console.log("Datos de correo " + this.formulario.controls["correo"].value);
      const response = await this.servicio.login(this.formulario.value);
    }
}
