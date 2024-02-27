import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-logout',
  templateUrl: './nav-logout.component.html',
  styleUrls: ['./nav-logout.component.css'],
})
export class NavLogoutComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  faArrowRightFromBracket = faArrowRightFromBracket;

  constructor(private router: Router) {}

  ngOnInit() {
    const tokenString = localStorage.getItem('token_usuario');

    if (tokenString) {
      try {
        const tokenParts = tokenString.split('.');

        //Decodificar la parte util
        const payloadString = atob(tokenParts[1]);

        //Convertir la parte útil decodificada a un objeto JavaScript
        const payload = JSON.parse(payloadString);

        this.nombre = payload.nombre;
        this.apellido = payload.apellido1;
        this.correo = payload.correo;

      } catch (error) {
        console.error('Error al analizar el token JSON:', error);
      }
    } else {
      console.error('No se encontró el token en el localStorage.');
    }
  }


  logOut() {
    //localStorage.setItem('token_usuario', 'sesionCerrada');
    
      localStorage.removeItem('token_usuario');
      localStorage.removeItem('id_usuario');
      localStorage.removeItem('rol');
      this.router.navigateByUrl('');
    
    this.router.navigateByUrl('');
  }
}
