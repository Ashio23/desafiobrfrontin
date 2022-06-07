import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
  }

  registrarUsuario(form: NgForm){
    console.log(form);
    this.seguridadService.registrarUsuario({
      rut: form.value.rut,
      nombre: form.value.nombre,
      apellido: form.value.apellido,
      correo: form.value.correo,
      password: form.value.password,
      saldo: 650000

    })
  }
}
