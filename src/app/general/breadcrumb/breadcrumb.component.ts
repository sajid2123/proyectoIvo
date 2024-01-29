import { Component,Input } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  @Input() primeraRouta!: string;
  @Input() primerNombre!: string;
  @Input() segundonombre!: string;

  faArrowLeft = faArrowLeft;

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

}
