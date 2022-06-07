import { Injectable } from "@angular/core";
import { Banco } from "./banco.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class BancoService {
  apiUrl = environment.apiUrl;


  constructor(private http: HttpClient){}


  getBanks(){
    return this.http.get<any>(this.apiUrl)
  }

}
