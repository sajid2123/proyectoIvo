import { Component,Input } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';



@Component({
  selector: 'app-breadcrumb-tres-pasos',
  templateUrl: './breadcrumb-tres-pasos.component.html',
  styleUrls: ['./breadcrumb-tres-pasos.component.css']
})
export class BreadcrumbTresPasosComponent {
  @Input() primeraRouta!: string;
  @Input() primerNombre!: string;

  @Input() segundonombre!: string;
  @Input() segundaRouta!: string;
 

  @Input() tercernombre!: string;
  @Input() tercerActivo!: boolean;
  

  faArrowLeft = faArrowLeft;

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
