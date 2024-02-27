import { Component, OnInit,EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { MedicoService } from '../servicio/medico.service';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { PopupImagenComponent } from '../popup-imagen/popup-imagen.component';

interface ImageData {
  base64: string;
  name: string;
}
interface FormDataModel {
  informe: string;
  imagenes: ImageData[]; 
}

@Component({
  selector: 'app-formulario-historial',
  templateUrl: './formulario-historial.component.html',
  styleUrls: ['./formulario-historial.component.css']
})

export class FormularioHistorialComponent {
 
  faCoffee = faCoffee;
  faFloppyDisk = faFloppyDisk;
  faFileLines = faFileLines;
  faDownload = faDownload;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  @Input() id_prueba!: number;
 


  formData: FormDataModel = {
    informe: '',
    imagenes: [],
  };

  constructor(private medicoService: MedicoService) {}
  ngOnInit(){
    this.getInformacionPrueba();
  }
  @ViewChild(PopupImagenComponent) popupComponent!: PopupImagenComponent;
  seleccionarImagen(base64: string) {
    this.popupComponent.mostrarImagenEnModal(base64);
  }
  getInformacionPrueba(){
    this.medicoService.getPrueba(this.id_prueba).subscribe( (response: any)  => {
      
      this.id_prueba = response.id_prueba;
      this.formData.informe = response.informe;
      this.formData.imagenes = response.imagenes.map((img: any) => ({
        name: img.nombre,
        base64: img.base64,
      }));
      console.log(this.formData);
    },error => {
      console.error('Ocurrió un error al enviar el formulario:', error);
    })
  }
  descargarImagen(base64: string, nombreArchivo: string) {
    const link = document.createElement('a');
    link.href = base64;
    link.download = nombreArchivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  

}
