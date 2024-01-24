import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'breadcrumb-atender-paciente',
  templateUrl: './breadcrumb-atender-paciente.component.html',
  styleUrls: ['./breadcrumb-atender-paciente.component.css']
})
export class BreadcrumbAtenderPacienteComponent {



  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
