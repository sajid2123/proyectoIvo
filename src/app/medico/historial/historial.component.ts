import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  constructor(private route: ActivatedRoute){}
  fecha!: string;
  id_prueba!: number;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.fecha = params['fecha']; 
      this.id_prueba = params['id_prueba'];
    });
  }
  
}
