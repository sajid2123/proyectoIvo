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
    pagingType: 'full_numbers',
    pageLength: 4,
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
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.resultados = data.filter(item => {
        return (
          (!this.dni || item.phone.includes(this.dni)) &&
          (!this.nombre || item.name.toLowerCase().includes(this.nombre.toLowerCase())) &&
          (!this.sip || item.address.zipcode.includes(this.sip)) &&
          (!this.apellido || item.username.toLowerCase().includes(this.apellido.toLowerCase()))
        );
      });
      this.dtTrigger.next(null);
    });
  }
}
