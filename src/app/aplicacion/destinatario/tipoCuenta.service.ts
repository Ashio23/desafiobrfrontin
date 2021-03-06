import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class TipoCuentaService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient){

  }

  obtenerTipoCuenta(){
    return this.http.get<any>(this.baseUrl + 'api/tipoCuenta')
  }

}
