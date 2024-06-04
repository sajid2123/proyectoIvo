import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoExternoService {

  
  urlBase = '';
  constructor(private http: HttpClient) { 
    // this.urlBase = 'http://ivo-back.cloud/api/v1/';
    this.urlBase = 'https://consultas-back.cloud/api/';
  }
  getFacturas(id:number){
    return this.http.get<any>(`${this.urlBase}${id}/invoices`);
  }
  getContratos(id:number){
    return this.http.get<any>(`${this.urlBase}${id}/contracts`);
  }
  downloadContract(id:number){
    return this.http.get<any>(`${this.urlBase}${id}/download/contract`);
  }
  downloadInvoice(id:number){
    return this.http.get<any>(`${this.urlBase}${id}/download/invoice`);
  }
}
