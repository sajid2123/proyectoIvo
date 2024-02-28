import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { data } from 'jquery';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicioService {

  private httpClient = inject(HttpClient);
  private urlBase = '';

  constructor(private http: HttpClient) {
    this.urlBase = 'http://ivo-back.cloud/api/v1/';
  }

  login(formValue: any) : Observable<any> {
    return this.httpClient.post<any>(this.urlBase, formValue);
  }
}
