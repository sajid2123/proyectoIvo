import { Component } from '@angular/core';

@Component({
  selector: 'formulario-atender-paciente',
  templateUrl: './formulario-atender-paciente.component.html',
  styleUrls: ['./formulario-atender-paciente.component.css']
})
export class FormularioAtenderPacienteComponent {
  formData = {
    informe: '',
  };

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
    }
  }

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
          this.imagePreviews.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }
 
}
