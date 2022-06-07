import { Component, OnInit } from '@angular/core';
import { DestinatarioService } from '../destinatario/destinatario.service';
import { Destinatario } from '../destinatario/destinatario.model';
import { ConditionalExpr } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TransferenciaService } from './transferencia.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css'],
})
export class TransferenciaComponent implements OnInit {
  selectDestinatario?: string;
  selectedDestinatarioText = '';
  destinatarios: Destinatario[] = [];
  destinatariosList: Destinatario[] = [];
  usuarioLogueado = sessionStorage.getItem('idCliente');

  rutDestinatario: string = '';
  nombreDestinatario: string = '';
  apellidoDestinatario: string = '';
  bancoDestinatario: string = '';
  correoDestinatario: string = '';
  tipoCuentaDestinatario: string = '';
  numeroCuenta: Number = 1;

  private destinatarioSubscription: Subscription;
  private transferenciaSubscription: Subscription;

  constructor(
    private destinatarioService: DestinatarioService,
    private transferenciaService: TransferenciaService
  ) {
    this.selectDestinatario = '';
  }

  ngOnInit(): void {
    this.transferenciaService.obtenerDestinatarios().subscribe((result) =>{
      this.destinatariosList = result;
      console.log('lista: ', this.destinatariosList);
      this.destinatarios = this.destinatariosList.filter(destinatarios => destinatarios.idCliente === this.usuarioLogueado);
    });

  }


  selectedDestinatario(event: any) {
    this.selectedDestinatarioText = event.source.selected.value;
    const id = event.source.selected.value;
    for(let i = 0; i < this.destinatarios.length; i++){
      if(id == this.destinatarios[i].rut){
        this.rutDestinatario = this.destinatarios[i].rut;
        this.nombreDestinatario = this.destinatarios[i].nombre;
        this.apellidoDestinatario = this.destinatarios[i].apellido;
        this.bancoDestinatario = this.destinatarios[i].descBanco;
        this.correoDestinatario = this.destinatarios[i].correo;
        this.tipoCuentaDestinatario = this.destinatarios[i].descTipoCuenta;
        this.numeroCuenta = this.destinatarios[i].numeroCuenta;
      }
    }
  }


  realizarTransferencia(form: NgForm) {
    if(form.valid) {
      this.transferenciaService.realizarTransferencia({
        idCliente: this.usuarioLogueado,
        bancoDestinatario: this.bancoDestinatario,
        nombreDestinatario: this.nombreDestinatario,
        rutDestinatario: this.rutDestinatario,
        monto: form.value.monto,
        tipocuenta: this.tipoCuentaDestinatario,
        fecha: new Date()
      });
      this.rutDestinatario = '';
      this.nombreDestinatario = '';
      this.apellidoDestinatario = '';
      this.correoDestinatario = '';
      this.bancoDestinatario = '';
      this.tipoCuentaDestinatario = '';
      this.rutDestinatario = '';
      this.numeroCuenta = 0;
      form.reset();
    }
  }

  ngOnDestroy() {

  }
}
