import { Component,Input, ViewChild, ElementRef } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { RadiologoService } from '../servicio/radiologo.service';


interface ImageData {
  base64: string;
  name: string;
  id_image?: number;
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
  @Input() estado_cita!: string;
  id_prueba: number = 0;
  id_image: number = 0;
  id_usuario = localStorage.getItem('id_usuario');
  
  mostrarErrores:boolean = false;
  faCoffee = faCoffee;
  faFloppyDisk = faFloppyDisk;
  faFileLines = faFileLines;
  faCircleXmark = faCircleXmark;

  formData: FormDataModel = {
    informe: '',
    imagenes: [],
  };
  imagePreviews: any[] = [];


  @ViewChild('botonModalPendiente') botonModalPendiente!: ElementRef;
  @ViewChild('botonModalRealizada') botonModalRealizada!: ElementRef;

  constructor(private radiologoService: RadiologoService ) {

  }

  ngOnInit() {

    if(this.estado_cita === "realizada"){
      this.getInformacionPrueba();
    }
    
  }

  onSubmit() {
    const form = new FormData();
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];

    form.append('informe' , this.formData.informe);                                     
    form.append('id_radiologo', `${this.id_usuario}`);
    form.append('id_paciente' ,  `${this.id_paciente}`);
    form.append('id_cita' ,  `${this.id_cita}`);
    form.append('fecha', formattedDate);

    for (let i = 0; i < this.formData.imagenes.length; i++) {
      if(this.estado_cita == "realizada" && this.formData.imagenes[i].id_image == undefined){
        form.append('imagesCode[]', this.formData.imagenes[i].base64);
        form.append('imagesName[]', this.formData.imagenes[i].name);
      }else if(this.estado_cita == "pendiente"){
        form.append('imagesCode[]', this.formData.imagenes[i].base64);
        form.append('imagesName[]', this.formData.imagenes[i].name);
      }
      
    }
  
    if (this.formData.informe.trim().length === 0 ||  this.formData.imagenes.length === 0) {
      this.mostrarErrores = true;
    }else{
      this.mostrarErrores = false;
      if(this.estado_cita == "realizada"){
        
        this.actualizarFormulario(form, this.id_prueba);
        this.botonModalRealizada.nativeElement.click();
        console.log(form);
      }else{
        this.insertarFromulario(form);
        this.botonModalPendiente.nativeElement.click();
        console.log(form);
      }
    }
  }

  insertarFromulario(form: FormData){
    this.radiologoService.postPruebaRadiologa(form).subscribe( response =>{
      console.log(response);
      this.resetFormAndImages();
    }, error => {
      console.error('Ocurrió un error al enviar el formulario:', error);
    });
  }

  actualizarFormulario(form: FormData, id_prueba: number){
    this.radiologoService.actualizarPrueba(form , id_prueba).subscribe( response =>{
      console.log(response);
      this.resetFormAndImages();
    }, error => {
      console.error('Ocurrió un error al enviar el formulario:', error);
    });
  }
  getInformacionPrueba(){
    this.radiologoService.getPrueba(this.id_cita).subscribe( (response: any)  => {
      console.log(response);
      this.id_prueba = response.id_prueba;
      this.formData.informe = response.informe;
      this.formData.imagenes = response.imagenes.map((img: any) => ({
        name: img.nombre,
        base64: img.base64,
        id_image: img.id_imagen
      }));
      this.imagePreviews = response.imagenes.map((img: any) => ({
        name: img.nombre,
      }));
    },error => {
      console.error('Ocurrió un error al enviar el formulario:', error);
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

    if(this.estado_cita == "realizada" && this.formData.imagenes[index].id_image != undefined ){
      this.eliminarImagenDeBasesDeDatos(index);
      this.imagePreviews.splice(index, 1);
      this.formData.imagenes.splice(index, 1);
    }else{
      this.imagePreviews.splice(index, 1);
      this.formData.imagenes.splice(index, 1);
    }
    
  }

  eliminarImagenDeBasesDeDatos(index: number){

    this.id_image = this.formData.imagenes[index].id_image ?? 0; 
    this.radiologoService.eliminarImagen(this.id_image).subscribe( (response: any)  => {
      console.log(response)
    },error => {
        console.error('Ocurrió un error al enviar el formulario:', error);
    });
  }
  
 
}
