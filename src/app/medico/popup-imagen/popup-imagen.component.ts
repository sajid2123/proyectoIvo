import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-popup-imagen',
  templateUrl: './popup-imagen.component.html',
  styleUrls: ['./popup-imagen.component.css']
})
export class PopupImagenComponent {
  imagen!: string;
  mostrar: boolean = false;

  ngOnInit(): void {
    console.log(this.mostrar);
    
  }
  mostrarImagenEnModal(imagenBase64: string) {
    this.imagen = imagenBase64;
    this.mostrar = true;
  }
  
}
