import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad.service';

@Injectable()
export class SeguridadRouter implements CanActivate {
  constructor(
    private seguridadService: SeguridadService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> | boolean | Observable<UrlTree> | UrlTree {
    if (this.seguridadService.onSesion()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}
