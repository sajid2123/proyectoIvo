import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasarDatosService {
  constructor() { }
  private activeTabSource = new BehaviorSubject<string>('');
  private citasPendientesSource = new BehaviorSubject<any[]>([]);
  private citasRealizadasSource = new BehaviorSubject<any[]>([]);

  activeTab$ = this.activeTabSource.asObservable();
  citasPendientes$ = this.citasPendientesSource.asObservable();
  citasRealizadas$ = this.citasRealizadasSource.asObservable();

  updateActiveTab(activeTab: string): void {
    this.activeTabSource.next(activeTab);
  }

  updateCitasPendientes(citasPendientes: any[]): void {
    this.citasPendientesSource.next(citasPendientes);
  }

  updateCitasRealizadas(citasRealizadas: any[]): void {
    this.citasRealizadasSource.next(citasRealizadas);
  }
}
