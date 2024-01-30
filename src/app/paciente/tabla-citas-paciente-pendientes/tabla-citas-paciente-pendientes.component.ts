import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';

interface Paciente {
    fecha: number;
    medico: string;
    servicio: number;
    hora: string;
  }

  
@Component({
  selector: 'app-tabla-citas-paciente-pendientes',
  templateUrl: './tabla-citas-paciente-pendientes.component.html',
  styleUrls: ['./tabla-citas-paciente-pendientes.component.css']
})


export class TablaCitasPacientePendientesComponent implements OnChanges {
  @Input() tipoCita: 'pendiente' | 'realizada' = 'pendiente';
  @Input() citasPendientes: Paciente[] = [];
  @Input() citasRealizadas: Paciente[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  displayedCitas: Paciente[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tipoCita']) {

      this.actualizarArray();
    }
  }

  ngOnInit(): void {
    this.dtOptions = {
      searching: false,
      pagingType: 'full_numbers',
    };

    this.actualizarArray();
    this.dtTrigger.next(null);
  }

  private actualizarArray(): void {
    this.displayedCitas = (this.tipoCita === 'pendiente') ? this.citasPendientes : this.citasRealizadas;
  }
}
