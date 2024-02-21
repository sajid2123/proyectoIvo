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
  @Input() fecha!: string;
  idUsaurio: number = parseInt(localStorage.getItem('id_usuario') || '0', 10 );
  citas!: CitaResponse[];
  dtOptions: DataTables.Settings = {};
  @Output() cargado = new EventEmitter<boolean>(); // Añade esto

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
        url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
      },
      pagingType: "numbers"
    }
  }


  
  getCitasRealizadas(){
  this.radiologoService.getCitasRealizadas(this.fecha, this.idUsaurio)
      .subscribe(
          response => {
            this.citas = response.citas;
            console.log(this.citas);
            if (this.citas) {
              this.cargado.emit(true); 
            }
          }
      );
  }

  
  onRowClick(cita: CitaResponse){
    this.router.navigate(['/app/radiologo/atender-paciente'], { queryParams: { sip: cita.sip, nombre: cita.nombre, apellido: cita.apellidos, hora: cita.hora, id_paciente: cita.id_paciente, id_cita: cita.id_cita} });
  }
}
