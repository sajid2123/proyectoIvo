import { Component } from '@angular/core';
import { AdministrativoServiceService } from '../administrativo-service.service';
import { inject } from '@angular/core';
import { error } from 'jquery';

@Component({
  selector: 'app-tabla-citas-generales',
  templateUrl: './tabla-citas-generales.component.html',
  styleUrls: ['./tabla-citas-generales.component.css']
})
  
export class TablaCitasGeneralesComponent {
  servicio = inject(AdministrativoServiceService);
  dtOptions: any = {};
  resultado:any;

  ngOnInit():void{
    this.obtenerCitas();

    this.dtOptions = {
      pagingType: "numbers"
    }

  }

  obtenerCitas(){
     this.servicio.obtenerCitasGenerales().subscribe(
      (response) => {
        console.log("Lista traida");

        console.log(response);

        this.resultado = response;
      },
      (error) => {
        console.error(error);
      } 
     )
  }
}
