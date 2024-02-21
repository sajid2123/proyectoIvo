import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }

  obtenerCitasPendientesSegunIdMedicoYFecha(idMedico:number, fecha:string){
    return this.http.get<any>(`http://localhost/api/v1/citas-pendiente/${fecha}/${idMedico}`);
  }

  obtenerCitasRealizadasSegunIdMedicoYFecha(idMedico:number, fecha:string){
    return this.http.get<any>(`http://localhost/api/v1/citas-realizada/${fecha}/${idMedico}`);
  }

}
