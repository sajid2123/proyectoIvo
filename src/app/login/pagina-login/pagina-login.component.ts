import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicioService } from 'src/app/api-servicio.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css'],
})

export class PaginaLoginComponent {
    formulario!: FormGroup;

    servicio = inject(ApiServicioService);

    constructor(private router: Router){
      this.formulario = new FormGroup({
        correo: new FormControl(),
        password: new FormControl()
      })
    }

    async onSubmit(){
      console.log("Datos de correo " + this.formulario.controls["correo"].value);
      const response = await this.servicio.login(this.formulario.value);

      if (!response.error) {
        
        localStorage.setItem('token_usuario', response.token);
        localStorage.setItem('id_usuario', response.user.id_usuario);
        localStorage.setItem('rol', response.user.id_rol);

        switch (Number(localStorage.getItem("rol"))) {
          case 2:
            this.router.navigateByUrl('/app/paciente');
          break;
          case 3:
            this.router.navigateByUrl('/app/medico');
          break;
          case 4:
            this.router.navigateByUrl('/app/radiologo');
          break;
          case 5:
            this.router.navigateByUrl('/app/administrativo');
          break;
        }
      } 
    }
}
