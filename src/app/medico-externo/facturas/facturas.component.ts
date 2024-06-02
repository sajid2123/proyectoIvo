import { Component, Input, inject } from '@angular/core';
import { MedicoExternoService } from '../servicio/medico-externo.service';
import { faDownload, faEye, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {
  @Input() facturas!: any;
  dtOptions: DataTables.Settings = {};
  faDownload = faDownload;
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
    this.servicio.getFacturas(this.idMedico).subscribe(
      (response: any) => {
        this.existir = true;
        this.facturas = response;
      }
    )
  }
  download(contrato: any) {
    this.servicio.downloadInvoice(contrato.id).subscribe(
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
        saveAs(blob, 'factura.pdf'); // Save the Blob as PDF file
      },
      (error) => {
        console.error('Error downloading contract:', error);
      }
    );
  }

}
