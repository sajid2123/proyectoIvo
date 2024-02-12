import { Component } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-opciones',
  templateUrl: './nav-opciones.component.html',
  styleUrls: ['./nav-opciones.component.css']
})
export class NavOpcionesComponent {
  faCalendar = faCalendar;
  faMagnifyingGlass = faMagnifyingGlass;
  faUserPlus = faUserPlus;
  faFile = faFile;
  
  rolDelUsuario?:number;

  ngOnInit(){
    this.rolDelUsuario = Number(localStorage.getItem('rol'));
  }
   
}
