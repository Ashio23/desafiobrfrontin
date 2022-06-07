import { Usuario } from './usuario.model';
import { LoginData } from './login-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  seguridadCambio = new Subject<boolean>();
  private usuario = {} as Usuario;
  data: any = {};
  baseUrl = environment.baseUrl;

  constructor(private router: Router, private http: HttpClient) {}

  registrarUsuario(usr: Usuario) {
    console.log(usr);
    this.http.post(this.baseUrl + 'api/cliente', usr).subscribe((response) => {
      this.data = response;
      if (this.data.data.result) {
        console.log('paso true');
      }
    });
    this.router.navigate(['/login']);
  }

  login(loginData: LoginData): void {
    this.http
      .get<Usuario>(this.baseUrl + 'api/cliente/' + loginData.rut)
      .subscribe((response) => {
        if (
          loginData.rut !== response.rut &&
          loginData.password !== response.password
        ) {
          console.log('El usuario no existe');
        } else {
          sessionStorage.setItem('idCliente', loginData.rut);
          console.log(sessionStorage.getItem('idCliente'));
          this.usuario = response;
          this.seguridadCambio.next(true);
          this.router.navigate(['/']);
        }
      });
  }

  salirSesion() {
    this.seguridadCambio.next(false);
    sessionStorage.setItem('idCliente', '');
    this.router.navigate(['/login']);
  }

  obtenerUsuario() {
    return { ...this.usuario };
  }

  onSesion() {
    return this.usuario != null;
  }
}
