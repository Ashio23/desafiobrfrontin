import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Destinatario } from '../destinatario/destinatario.model';
import { Historial } from '../historial/historial.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  baseUrl = environment.baseUrl;
  private destinatarioLista: Destinatario[] = [];
  private destinatarioSubject = new Subject<Destinatario[]>();
  private usuarioLogueado = localStorage.getItem('idCliente');
  data: any = {};

  constructor(private http: HttpClient) {}

  // obtenerDestinatarios(): void {
  //   this.http
  //     .get<Destinatario[]>(this.baseUrl + 'api/destinatario/' + this.usuarioLogueado)
  //     .subscribe((response) => {
  //       this.data = response;
  //       console.log(this.data);
  //     });
  // }

  obtenerDestinatarios(){
    return this.http.get<any>(this.baseUrl + 'api/destinatario')
  }

  obtenerDestinatario() {
    return this.http.get<any>(
      this.baseUrl + 'api/destinatario/' + this.usuarioLogueado
    );
  }

  realizarTransferencia(historial: Historial) {
    this.http.post<any>(this.baseUrl + 'api/transferencia', historial)
    .subscribe((response) => {
      this.data = response;
      if(this.data){
        console.log('Pasó')
      }else{
        console.log('no pasó')
      }
    })
  }

  obtenerActualListener() {
    return this.destinatarioSubject.asObservable();
  }
}
