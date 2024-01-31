import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';



interface FormDataModel {
  volante: string;
}

@Component({
  selector: 'app-formulario-generar-volante',
  templateUrl: './formulario-generar-volante.component.html',
  styleUrls: ['./formulario-generar-volante.component.css']
})
export class FormularioGenerarVolanteComponent {
  faCoffee = faCoffee;
  faFloppyDisk = faFloppyDisk;
  faFileLines = faFileLines;
  faCircleXmark = faCircleXmark;

  formData: FormDataModel = {
    volante: '',
  };

  onSubmit() {
    console.log(this.formData);
  }
}
