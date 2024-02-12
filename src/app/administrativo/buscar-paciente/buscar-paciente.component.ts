import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-buscar-paciente',
  templateUrl: './buscar-paciente.component.html',
  styleUrls: ['./buscar-paciente.component.css']
})
export class BuscarPacienteComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  resultados: any[] = [];

  dni: string = '';
  nombre: string = '';
  sip: string = '';
  apellido: string = '';

  buscando: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  this.dtOptions = {
    retrieve: true,
    pagingType: 'full_numbers',
    pageLength: 5,
    searching: false,
    lengthChange: false,
    language: {
      info: ' ', // Personalizar el mensaje
      paginate: {
        first: '',
        last: '',
        next: 'Siguiente',
        previous: 'Anterior'
      }
    },
  };
}


  buscarPaciente(): void {
    this.buscando = true;
    this.http.get<any[]>('http://localhost/api/v1/pacientes').subscribe(data => {
      this.resultados = data.filter(item => {
        return (
          (!this.dni || item.id_usuario_paciente.includes(this.dni)) &&
          (!this.nombre || item.id_usuario_paciente.toLowerCase().includes(this.nombre.toLowerCase())) &&
          (!this.sip || item.sip.includes(this.sip)) &&
          (!this.apellido || item.id_usuario_paciente.toLowerCase().includes(this.apellido.toLowerCase()))
        );
      });
      this.dtTrigger.next(null);
    });
  }
}
