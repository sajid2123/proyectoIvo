import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface CitaResponse{
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

  getCitasPendientes(fecha: string, id: number){
    return this.httpClient.get(`http://localhost/api/v1/citas-pendiente/${fecha}/${id}`);
  }
  
  
}
