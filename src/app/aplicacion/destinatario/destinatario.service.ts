import { Destinatario } from "./destinatario.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DestinatarioService{

  baseUrl = environment.baseUrl;
  data:any={};
  destinatarioSubject = new Subject<Destinatario[]>();

  constructor(private http: HttpClient) {}


  agregarDestinatario(destinatario: Destinatario){
      console.log(destinatario);
      this.http.post(this.baseUrl + 'api/destinatario', destinatario)
      .subscribe((response) => {
        this.data = response;
    });

  }

  obtenerActualListener(){
    return this.destinatarioSubject.asObservable();
  }

}
