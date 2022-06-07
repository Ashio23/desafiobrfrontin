import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { SeguridadRouter } from './seguridad/seguridad.router';
import { TransferenciaComponent } from './aplicacion/transferencia/transferencia.component';
import { DestinatarioComponent } from './aplicacion/destinatario/destinatario.component';
import { InicioComponent } from './inicio.component';
import { HistorialComponent } from './aplicacion/historial/historial.component';

const routes: Routes = [
  { path: 'inicio', component:InicioComponent,canActivate: [SeguridadRouter]},
  { path: 'login', component:LoginComponent},
  { path: 'registrar', component:RegistrarComponent },
  { path: 'transferencia', component:TransferenciaComponent, canActivate: [SeguridadRouter]},
  { path: 'destinatario', component:DestinatarioComponent, canActivate: [SeguridadRouter]},
  { path: 'historial', component: HistorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SeguridadRouter]
})
export class AppRoutingModule { }
