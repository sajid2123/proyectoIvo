import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabla-citas-pendientes',
  templateUrl: './tabla-citas-pendientes.component.html',
  styleUrls: ['./tabla-citas-pendientes.component.css']
})

export class TablaCitasPendientesComponent {

  pendientes:boolean = true;

  constructor(private route:ActivatedRoute) {
    
  }

  ngOnInit(){
    this.route.url.subscribe((event) => {

      if (event[0].path == "citas-realizadas") {
        this.pendientes = false;
      } else {
        this.pendientes = true;
      }
      
    });
  }
}
