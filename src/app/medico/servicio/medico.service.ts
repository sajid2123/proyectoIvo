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
    return this.http.get<any>(`http://localhost/api/v1/citas-pendiente-medico/${fecha}/${idMedico}`);
  }

  obtenerCitasRealizadasSegunIdMedicoYFecha(idMedico:number, fecha:string){
    return this.http.get<any>(`http://localhost/api/v1/citas-realizada-medico/${fecha}/${idMedico}`);
  }

  registrarDiagnostico(diagnostico:any){
    return this.http.post<any>(`http://localhost/api/v1/registrar-diagnostico/`, diagnostico);
  }

  obtenerDiagnostico(idCita:any){
    return this.http.get<any>(`http://localhost/api/v1/obtener-diagnostico/${idCita}`);
  }


  modificarDiagnostico(diagnostico:any, idCita:string){
    return this.http.post<any>(`http://localhost/api/v1/modificar-diagnostico/${idCita}`, diagnostico);
  }
  
  getAllPruebas(){
    

  }
}
