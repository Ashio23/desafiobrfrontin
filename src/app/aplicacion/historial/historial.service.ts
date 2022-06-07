import { Injectable } from "@angular/core";
import { Historial } from "./historial.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class HistorialService {
  baseUrl = environment.baseUrl;
  private historialLista: Historial[] = [];
  private historialSubject = new Subject<Historial[]>();
  data:any={};

  private usuarioLogueado = sessionStorage.getItem('idCliente');

  constructor(private http: HttpClient){

  }

  obtenerHistorial(){
    return this.http.get<Historial[]>(this.baseUrl + 'api/transferencia');

  }

  obtenerActualListener(){
    return this.historialSubject.asObservable();
  }

}
