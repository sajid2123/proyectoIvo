import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { MedicoService } from '../servicio/medico.service';
import { ActivatedRoute } from '@angular/router';


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
  
  fechaDeHoy:Date = new Date();
  formData!:FormGroup;
  servicio = inject(MedicoService);
  estado = '';
  sip = '';
  id_cita = '';
  textoModal = '';


  errorInforme:boolean = false;
  errorTratamiento:boolean = false;


  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe(params => {
      this.sip = params['sip']; 
      this.id_cita = params['id_cita'];
      this.estado = params['estado'];
    })
    if (this.estado == 'pendiente') {
      this.formData = new FormGroup({
        informe: new FormControl('', Validators.required),
        tratamientos: new FormControl('', Validators.required),
      })

      this.textoModal = 'Diagnostico creado';
    } else {

      this.servicio.obtenerDiagnostico(this.id_cita).subscribe(
        (response) =>{
          this.formData = new FormGroup({
            informe: new FormControl(response.informe, Validators.required),
            tratamientos: new FormControl(response.tratamiento, Validators.required),
          })
        },
        (error) => {
          console.log(error);
        }
      )

      this.textoModal = 'Diagnostico modificado';
    }
  }


  onSubmit() {

    if (this.formData.invalid) {
    
      if(this.formData.get("informe")?.status == "INVALID"){
        this.errorInforme = true;
      } else {
        this.errorInforme = false;
      }
      
      if(this.formData.get("tratamientos")?.status == "INVALID"){
        this.errorTratamiento = true;
      } else {
        this.errorTratamiento = false;
      }
    
    } else {
      this.errorInforme = false;
      this.errorTratamiento = false;
      
      if (this.estado == "pendiente") {

        const diagnostico = {
          informe: this.formData.get('informe')?.value,
          tratamientos: this.formData.get('tratamientos')?.value,
          fecha_creacion: this.fechaDeHoy.getFullYear() + "-"  + (this.fechaDeHoy.getUTCMonth()+1) + "-" + this.fechaDeHoy.getDate(),
          id_medico: localStorage.getItem('id_usuario'),
          id_cita: this.id_cita,
          sip: this.sip,
        }
  
        console.log(this.formData.value);
  
        this.servicio.registrarDiagnostico(diagnostico).subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );

      } else if(this.estado == "realizada"){
        
      const diagnosticoModificado = {
          informe: this.formData.get('informe')?.value,
          tratamiento: this.formData.get('tratamientos')?.value,
        }
  
        console.log(this.formData.value);
  
        this.servicio.modificarDiagnostico(diagnosticoModificado, this.id_cita).subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );

      }
    }
  }
}
