import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {
  clientes = ['Jona', 'Jony', 'Chino'];

  eliminarCliente(cliente){
    this.clientes = this.clientes.filter(p => p !== cliente);
  }

  guardarCliente(f){
    console.log('objeto formulario', f)
  }

}
