import { Component, Input, inject } from '@angular/core';
import { faDownload, faEye, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MedicoExternoService } from '../servicio/medico-externo.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent  {
  @Input() contratos!: any;
  faDownload = faDownload;
  faEye = faEye;
  faEnvelope = faEnvelope;
  dtOptions: DataTables.Settings = {};

  idMedico: number = Number(localStorage.getItem("id_usuario"));
  existir: boolean = false;
  servicio = inject(MedicoExternoService);
  ngOnInit(): void {
    this.dtOptions = {
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json",
        emptyTable: '',
      },
      pagingType: "numbers",
      info: false,
    }
    this.servicio.getContratos(this.idMedico).subscribe(
      (response) => {
        this.existir = true;
        this.contratos = response;
      }
    )
  }
  download(contrato: any) {
    this.servicio.sendContractByEmail(contrato.id).subscribe(
      (response) => { 
        console.log(response)
        const pdfData = response.pdfData; // Assuming your JSON response has a key 'pdfData' containing the base64-encoded PDF data
        const binaryData = atob(pdfData); // Decode base64 string to binary data
        const arrayBuffer = new ArrayBuffer(binaryData.length);
        const uint8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < binaryData.length; i++) {
          uint8Array[i] = binaryData.charCodeAt(i);
        }
        const blob = new Blob([uint8Array], { type: 'application/pdf' }); // Create Blob from binary data
        saveAs(blob, 'contract.pdf'); // Save the Blob as PDF file
      },
      (error) => {
        console.error('Error downloading contract:', error);
      }
    );
  }
 
}
