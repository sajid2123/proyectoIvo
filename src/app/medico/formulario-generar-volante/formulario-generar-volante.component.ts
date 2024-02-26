import { Component, inject } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { MedicoService } from '../servicio/medico.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { error } from 'jquery';
import { ActivatedRoute } from '@angular/router';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

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

  servicio = inject(MedicoService);
  formulario!:FormGroup;
  id_cita = '';
  errorVolante = false;
  existir = true;

  constructor(private route: ActivatedRoute){

    this.route.queryParams.subscribe(params => {
      this.id_cita = params['id_cita'];
    })

    this.servicio.mostrarVolante(this.id_cita).subscribe(
      (response) =>{
        this.existir = false;
          this.formulario = new FormGroup({
            volante: new FormControl(response, Validators.required),
          })

          this.existir = true;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  onSubmit() {

    if (this.formulario.get('volante')?.invalid) {
      this.errorVolante = true;
    } else {

      this.servicio.subirVolante(this.formulario.value, this.id_cita).subscribe(
        (response) => {
          this.errorVolante = false;
          let docDefinition = {
            header: 'simple text',
          
            footer: {
              columns: [
                'Left part',
                { text: 'Right part' }
              ]
            },
          
            content: (this.formulario.get('volante')?.value)
          };
          pdfMake.createPdf(docDefinition).open();
        },
        (error) => {
          console.log("Ups...");

          console.log(error);
        }
      )
    }
  }
}
