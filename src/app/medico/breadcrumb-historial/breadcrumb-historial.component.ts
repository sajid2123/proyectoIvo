import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'breadcrumb-historial',
  templateUrl: './breadcrumb-historial.component.html',
  styleUrls: ['./breadcrumb-historial.component.css']
})
export class BreadcrumbHistorialComponent {

  faArrowLeft = faArrowLeft;

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
