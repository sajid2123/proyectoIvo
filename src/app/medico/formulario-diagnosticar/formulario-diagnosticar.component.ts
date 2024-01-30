import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';



interface FormDataModel {
  informe: string;
  tratamientos: string; 
}

@Component({
  selector: 'app-formulario-diagnosticar',
  templateUrl: './formulario-diagnosticar.component.html',
  styleUrls: ['./formulario-diagnosticar.component.css']
})
export class FormularioDiagnosticarComponent {
  faCoffee = faCoffee;
  faFloppyDisk = faFloppyDisk;
  faFileLines = faFileLines;
  faCircleXmark = faCircleXmark;

  formData: FormDataModel = {
    informe: '',
    tratamientos: '',
  };

  onSubmit() {
    console.log(this.formData);
  }
}
