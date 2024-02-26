import { Component, OnInit, Input, SimpleChanges, OnChanges, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { CitaResponse, RadiologoService } from '../servicio/radiologo.service';

interface Cita {
  sip: string;
  nombre: string;
  apellido: string;
  hora: string;
}

@Component({
  selector: 'app-tabla-citas-realizadas',
  templateUrl: './tabla-citas-realizadas.component.html',
  styleUrls: ['./tabla-citas-realizadas.component.css']
})
export class TablaCitasRealizadasComponent {
  @Input() fecha!: Date;
  existir: boolean = false;
  fechaCompleta:string = ""; 
  idUsaurio: number = parseInt(localStorage.getItem('id_usuario') || '0', 10 );
  citas!: CitaResponse[];
  dtOptions: DataTables.Settings = {};

  constructor(private router: Router,private radiologoService: RadiologoService ) {}


 
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fecha'] && !changes['fecha'].isFirstChange()) {
      this.getCitasRealizadas();
    }
  }

  ngOnInit(): void {
   
    this.getCitasRealizadas();
   

    this.dtOptions = {
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json",
        emptyTable: '',
      },
      pagingType: "numbers",
      info: false,
    }
  }


  
  getCitasRealizadas(){

  this.fechaCompleta =this.fecha.getFullYear() + "-"  + (this.fecha.getUTCMonth()+1) + "-" + this.fecha.getDate();
  this.radiologoService.getCitasRealizadas(this.fechaCompleta, this.idUsaurio)
      .subscribe(
          response => {
            this.existir = true;
            this.citas = response.citas;
            console.log(this.citas);
            
          }
      );
  }

  
  onRowClick(cita: CitaResponse){
    this.router.navigate(['/app/radiologo/atender-paciente'], { queryParams: { sip: cita.sip, nombre: cita.nombre, apellido: cita.apellidos, hora: cita.hora, id_paciente: cita.id_paciente, id_cita: cita.id_cita, estado: "realizada"} });
  }

  
  refrescarTabla(fechaEntrada:Date){
    this.existir = false;
    this.fechaCompleta = fechaEntrada.getFullYear() + "-"  + (fechaEntrada.getUTCMonth()+1) + "-" + fechaEntrada.getDate();

    this.radiologoService.getCitasRealizadas(this.fechaCompleta , this.idUsaurio)
      .subscribe(
          response => {
            this.existir = true;
            this.citas = response.citas;
            console.log(this.citas); 
          }
      );
  }
}
