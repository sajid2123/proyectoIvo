import { Component, OnInit, Input, SimpleChanges, OnChanges, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { CitaResponse, RadiologoService } from '../servicio/radiologo.service';




@Component({
  selector: 'app-tabla-citas-pendientes',
  templateUrl: './tabla-citas-pendientes.component.html',
  styleUrls: ['./tabla-citas-pendientes.component.css']
})
                        
export class TablaCitasPendientesComponent {
  @Input() fecha!: string;
  idUsaurio: number = parseInt(localStorage.getItem('id_usuario') || '0', 10 );
  citas!: CitaResponse[];
  dtOptions: DataTables.Settings = {};
  @Output() cargado = new EventEmitter<boolean>(); // Añade esto


  constructor(private router: Router,private radiologoService: RadiologoService ) {}


 
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fecha'] && !changes['fecha'].isFirstChange()) {
      this.getCitasPendientes();
    }
  }

  ngOnInit(): void {
    console.log(typeof this.idUsaurio);
    this.getCitasPendientes();
   
    console.log(this.fecha);
    this.dtOptions = {
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
      },
      pagingType: "numbers"
    }
  }


  
  getCitasPendientes(){
  this.radiologoService.getCitasPendientes(this.fecha, this.idUsaurio)
      .subscribe(
          response => {
            this.citas = response.citas;
            console.log(this.citas);
            if (this.citas) {
              this.cargado.emit(true); // Emite true cuando citas está cargado
            }
          }
      );
  }

  
  onRowClick(cita: CitaResponse){
    this.router.navigate(['/app/radiologo/atender-paciente'], { queryParams: { sip: cita.sip, nombre: cita.nombre, apellido: cita.apellidos, hora: cita.hora, id_paciente: cita.id_paciente, id_cita: cita.id_cita} });
  }
}
