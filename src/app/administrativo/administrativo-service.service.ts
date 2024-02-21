import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministrativoServiceService {
  // Definir propiedades para almacenar médicos y servicios
  private medicos: any[] = [];
  private servicios: any[] = [];

  constructor(private http: HttpClient) {}

  darAltaPaciente(formulario:any): Observable<any> {
    return this.http.post<any>(`http://localhost/api/v1/alta-paciente`, formulario);
  }

  enlazarAdministrativoConPacienteRecientementeCreado(paciente:any){
    return this.http.post<any>(`http://localhost/api/v1/alta-paciente`, paciente);
  }

  obtenerPaciente(idPaciente: string): Observable<any> {
    return this.http.get<any>(`http://localhost/api/v1/pacientes/${idPaciente}`);
  }

  obtenerCitasGenerales(){
    return this.http.get<any>(`http://localhost/api/v1/citas-generales`);
  }

  obtenerCitas(idPaciente: string, estado: string): Observable<any> {
    return this.http.get<any>(`http://localhost/api/v1/citas?id_usuario_paciente=${idPaciente}&estado=${estado}`);
  }

  eliminarCita(idCita: string): Observable<any> {
    return this.http.delete(`http://localhost/api/v1/citas/${idCita}`);
  }

  obtenerMedicos(): Observable<any> {
    return this.http.get<any>('http://localhost/api/v1/medicos');
  }

  obtenerServicios(): Observable<any> {
    return this.http.get<any>('http://localhost/api/v1/servicios');
  }

  crearCita(datosCita: any): Observable<any> {
    return this.http.post<any>('http://localhost/api/v1/crear-citas', datosCita);
  }

  buscarPaciente(id_admin:string): Observable<any> {
    return  this.http.get<any>(`http://localhost/api/v1/pacientes?id_usuario_administrativo=${id_admin}`);
  }

  actualizarDatosPaciente(idPaciente: string, datosActualizados: any): Observable<any> {
    return this.http.put<any>(`http://localhost/api/v1/usuarios/${idPaciente}`, datosActualizados);
  }

  modificarCita(datosCita: any, citaId:string): Observable<any> {
    return this.http.put<any>(`http://localhost/api/v1/citas/${citaId}`, datosCita);
  }

  obtenerDetallesCita(idPaciente: string): Observable<any> {
    return this.http.get<any>(`http://localhost/api/v1/citas?id_usuario_paciente=${idPaciente}`);
  }
}
