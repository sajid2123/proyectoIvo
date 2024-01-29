import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';



interface FormDataModel {
  informe: string;
  imagenes: File[]; 
}
@Component({
  selector: 'formulario-atender-paciente',
  templateUrl: './formulario-atender-paciente.component.html',
  styleUrls: ['./formulario-atender-paciente.component.css'],

})



export class FormularioAtenderPacienteComponent {
  faCoffee = faCoffee;
  faFloppyDisk = faFloppyDisk;

  formData: FormDataModel = {
    informe: '',
    imagenes: []
  };


  onSubmit() {
    console.log(this.formData);
  }
  imagePreviews: any[] = [];

  

  onFileChange(event: any) {
    const files = event.target.files;
    if (files) {
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreviews.push({
            url: e.target.result,
            name: file.name 
          });
          this.formData.imagenes.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }
 
}
