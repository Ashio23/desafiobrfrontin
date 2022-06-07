import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
  }

  loginUsuario(form: NgForm){
    this.seguridadService.login({
      rut: form.value.rut,
      password: form.value.password
    })
  }

}
