import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitaResponse, RadiologoService } from '../servicio/radiologo.service';



@Component({
  selector: 'app-tabla-citas-pendientes',
  templateUrl: './tabla-citas-pendientes.component.html',
  styleUrls: ['./tabla-citas-pendientes.component.css']
})

export class TablaCitasPendientesComponent {
  
  citas!: CitaResponse[];
  dtOptions: DataTables.Settings = {};


  constructor(private router: Router,private radiologoService: RadiologoService ) {}


 


  ngOnInit(): void {

    this.getCitasPendientes();
   

    this.dtOptions = {
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
      },
      pagingType: "numbers"
    }
  }


  
  getCitasPendientes(){
    this.radiologoService.getCitasPendientes('2024-02-19',7)
      .subscribe(
        (res: any) => {
          this.citas = res.citas;
        },
        (error) => {
          console.error('Error al obtener citas pendientes', error);
        }
      );
  }

  
  onRowClick(cita: CitaResponse){
    this.router.navigate(['/app/radiologo/atender-paciente'], { queryParams: { sip: cita.sip, nombre: cita.nombre, apellido: cita.apellidos, hora: cita.hora } });
  }
}
