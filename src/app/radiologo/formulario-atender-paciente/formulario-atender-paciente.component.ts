import { Component,Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { RadiologoService } from '../servicio/radiologo.service';


interface ImageData {
  base64: string;
  name: string;
}
interface FormDataModel {
  informe: string;
  imagenes: ImageData[]; 
}

@Component({
  selector: 'formulario-atender-paciente',
  templateUrl: './formulario-atender-paciente.component.html',
  styleUrls: ['./formulario-atender-paciente.component.css'],

})



export class FormularioAtenderPacienteComponent {

  @Input() id_paciente!: number;
  @Input() id_cita!: number;
  

  faCoffee = faCoffee;
  faFloppyDisk = faFloppyDisk;
  faFileLines = faFileLines;
  faCircleXmark = faCircleXmark;

  formData: FormDataModel = {
    informe: '',
    imagenes: [],
  };
  imagePreviews: any[] = [];

  id_usuario = localStorage.getItem('id_usuario');

  constructor(private radiologoService: RadiologoService ) {

  }

  ngOnInit() {
    console.log('ID del paciente:', this.id_paciente);
  }

  onSubmit() {
    const form = new FormData();
    form.append('informe' , this.formData.informe);                                     

    for (let i = 0; i < this.formData.imagenes.length; i++) {
      form.append('imagesCode[]', this.formData.imagenes[i].base64);
      form.append('imagesName[]', this.formData.imagenes[i].name);
    }
    form.append('id_radiologo', `${this.id_usuario}`);
    form.append('id_paciente' ,  `${this.id_paciente}`);
    form.append('id_cita' ,  `${this.id_cita}`);

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];

    form.append('fecha', formattedDate);

    this.radiologoService.postPruebaRadiologa(form).subscribe( response =>{
      console.log(response);
      this.resetFormAndImages();
    }, error => {
    console.error('Ocurrió un error al enviar el formulario:', error);
    // Aquí puedes manejar errores, como mostrar un mensaje al usuario
    })


  }
  
  resetFormAndImages() {
   
    this.formData = {
      informe: '',
      imagenes: [],
    };

    this.imagePreviews = [];
  }
  

  onFileChange(event: any) {
    const files = event.target.files;
    if (files) {
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreviews.push({
            name: file.name 
          });
          this.formData.imagenes.push({
            base64: e.target.result,
            name: file.name
          });
        };
        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(index: number) {

    this.imagePreviews.splice(index, 1);
    this.formData.imagenes.splice(index, 1);
}
 
}
