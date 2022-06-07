import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { DestinatarioService } from './destinatario.service';
import { Destinatario } from './destinatario.model';
import { BancoService } from './banco.service';
import { MatSelectChange } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { Banco } from './banco.model';
import { TipoCuentaService } from './tipoCuenta.service';
import { TipoCuenta } from './tipoCuenta.model';

@Component({
  selector: 'app-destinatario',
  templateUrl: './destinatario.component.html',
  styleUrls: ['./destinatario.component.css'],
})
export class DestinatarioComponent implements OnInit, OnDestroy {
  selectBank?: string;
  selectedBankText: string;
  selectTipoCuenta?: string;
  selectedTipoCuentaText: string;
  idCliente: string;
  usuarioLogueado: string;


  bancosData: Banco[] = [];
  tipoCuentas: TipoCuenta[] = [];


  constructor(
    private destinatarioService: DestinatarioService,
    private bancoService: BancoService,
    private tipoCuentaService: TipoCuentaService,
    private formBuilder: FormBuilder
    ) {
      this.selectedTipoCuentaText = '';
      this.selectedBankText = '';
      this.selectTipoCuenta = '';
      this.idCliente = '';
      this.usuarioLogueado = '' + sessionStorage.getItem('idCliente');
  }

  selectedBanco(event: MatSelectChange) {
    this.selectedBankText = (event.source.selected as MatOption).viewValue;
    console.log(this.selectedBankText);
  }

  selectedTipoCuenta(event: MatSelectChange) {
    this.selectedTipoCuentaText = (event.source.selected as MatOption).viewValue;
    console.log(this.selectedTipoCuentaText);

  }

  ngOnInit(): void {
    this.tipoCuentaService.obtenerTipoCuenta().subscribe((result) =>{
      this.tipoCuentas = result;
      console.log(this.tipoCuentas);

    })
    this.bancoService.getBanks().subscribe((result) => {
      this.bancosData = result['banks'];
      console.log(this.bancosData);
    });
  }

  ngOnDestroy(): void {

  }

  agregarDestinatario(form: NgForm) {

    this.destinatarioService.agregarDestinatario({
        idCliente: this.usuarioLogueado,
        rut: form.value.rut,
        nombre: form.value.nombre,
        apellido: form.value.apellido,
        correo: form.value.correo,
        telefono: form.value.telefono,
        descBanco: this.selectedBankText,
        descTipoCuenta: this.selectedTipoCuentaText,
        numeroCuenta: form.value.numeroCuenta,
    });
  }
}

