import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './seguridad/login/login.component';
import { TransferenciaComponent } from './aplicacion/transferencia/transferencia.component';
import { DestinatarioComponent } from './aplicacion/destinatario/destinatario.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarraComponent } from './navegacion/barra/barra.component';
import { MenuListaComponent } from './navegacion/menu-lista/menu-lista.component';
import { TransferenciaService } from './aplicacion/transferencia/transferencia.service';
import { DestinatarioService } from './aplicacion/destinatario/destinatario.service';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { InicioComponent } from './inicio.component';
import { SeguridadService } from './seguridad/seguridad.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransferenciaComponent,
    DestinatarioComponent,
    BarraComponent,
    MenuListaComponent,
    RegistrarComponent,
    InicioComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule

  ],
  providers: [SeguridadService, TransferenciaService, DestinatarioService, {provide: MAT_DATE_LOCALE, useValue: 'es-ES'} ],
  bootstrap: [AppComponent],
})

export class AppModule { }
