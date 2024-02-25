import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

import { Observable} from 'rxjs';

export interface CitaResponse{
  "id_cita": number,
  "sip": string,
  "hora": string,
  "id_paciente": number,
  "nombre": string,
  "apellidos": string
}

@Injectable({
  providedIn: 'root'
})
export class RadiologoService {

  constructor(private httpClient: HttpClient) { }

  getCitasPendientes(fecha: string, id: number): Observable<any>{
    return this.httpClient.get(`http://localhost/api/v1/citas-pendiente-radiologo/${fecha}/${id}`);
  }
  getCitasRealizadas(fecha: string, id: number): Observable<any>{
    return this.httpClient.get(`http://localhost/api/v1/citas-realizada-radiologo/${fecha}/${id}`);
  }
  
  postPruebaRadiologa(formData: FormData){
    return this.httpClient.post('http://localhost/api/v1/crear-prueba', formData);
  }
  getPrueba(id: number){
    return this.httpClient.get(`http://localhost/api/v1/prueba/${id}`);
  }
  actualizarPrueba(form: FormData,id: number){
    return this.httpClient.post(`http://localhost/api/v1/actualizar-prueba/${id}` , form);
  }
  eliminarImagen(id: number){
    return this.httpClient.delete(`http://localhost/api/v1/imagen/${id}`);
  }

  
  
}
