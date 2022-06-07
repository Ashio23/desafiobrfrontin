import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { HistorialService } from './historial.service';
import { Historial } from './historial.model';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements OnInit {

  displayedColumns: string[] = ['nombreDestinatario', 'rut', 'banco', 'tipoCuenta', 'monto', 'fecha'];
  dataSource = new MatTableDataSource<Historial>();
  historial: Historial[] = [];
  usuarioLogueado = sessionStorage.getItem('idCliente');
  data:any={};
  constructor(private historialService: HistorialService) {
  }

  ngOnInit(): void {
    this.historialService.obtenerHistorial().subscribe((results) => {
      this.data = results;
      this.dataSource.data = this.data;
      console.log('datos: ',this.dataSource.data);
      this.dataSource.data = this.dataSource.data.filter(data => data.idCliente === this.usuarioLogueado);
    });
  }

  ngOnDestroy() {

  }
}
