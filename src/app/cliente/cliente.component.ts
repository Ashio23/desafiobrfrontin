import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: 'cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  @Input() nombreCliente: string;

  @Output() clienteClicked = new EventEmitter();

  onClicked(){
this.clienteClicked.emit();
  }

}


