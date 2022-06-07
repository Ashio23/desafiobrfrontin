import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { SeguridadService } from '../../seguridad/seguridad.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-lista',
  templateUrl: './menu-lista.component.html',
  styleUrls: ['./menu-lista.component.css']
})
export class MenuListaComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<void>();
  estadoUsuario: boolean;
  usuarioSubscription: Subscription;

  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.usuarioSubscription = this.seguridadServicio.seguridadCambio.subscribe(status => {
        this.estadoUsuario = status;
    })
  }

  ngOnDestroy(){
    this.usuarioSubscription.unsubscribe();
  }

  onCerrarMenu(){
    this.menuToggle.emit();
  }

  onTerminarSesion(){
    this.menuToggle.emit();
    this.seguridadServicio.salirSesion();
  }

}
