import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { data } from 'jquery';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicioService {

  private httpClient = inject(HttpClient);
  private baseUrl: string;

  constructor(private http:HttpClient) { 
    this.baseUrl = 'http://13.51.150.61/api/login/authenticate';
    //this.baseUrl = 'http://localhost/api/v1/login';
  }

  login(formValue: any) : Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, formValue);
  }
}
