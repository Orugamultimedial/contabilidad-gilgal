import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL = 'http://iglesiagilgal.ml/api_php/';

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    return this.http.get(`${this.URL}ObtenerUsuarios.php`);
  }

  altaUsuario(usuario) {
    return this.http.post(`${this.URL}AltaUsuario.php`, JSON.stringify(usuario));
  }

  preAltaComercio(email) {
    return this.http.post(`${this.URL}preAltaComercio.php`, JSON.stringify(email));
  }

  altaComercio(comercio) {
    return this.http.post(`${this.URL}AltaComercio.php`, JSON.stringify(comercio));
  }

  bajaUsuario(idUsuario: number) {
    return this.http.get(`${this.URL}BajaUsuario.php?idUsuario=${idUsuario}`);
  }

  seleccionarUsuario(idUsuario: number) {
    return this.http.get(`${this.URL}SeleccionarUsuario.php?idUsuario=${idUsuario}`);
  }

  editarUsuario(usuario) {
    return this.http.post(`${this.URL}EditarUsuario.php`, JSON.stringify(usuario));
  }

  editarUsuarioCompleto(usuario) {
    return this.http.post(`${this.URL}EditarUsuarioCompleto.php`, JSON.stringify(usuario));
  }

  asignarUsuario(usuario) {
    return this.http.post(`${this.URL}AsignarUsuario.php`, JSON.stringify(usuario));
  }

  stockRecord(register) {
    return this.http.post(`${this.URL}Register.php`, JSON.stringify(register));
  }

  obtenerRegistros() {
    return this.http.get(`${this.URL}ObtenerRegistros.php`);
  }

  orderCancellation(email) {
    return this.http.post(`${this.URL}orderCancellation.php`, JSON.stringify(email));
  }

  orderDelay(email) {
    return this.http.post(`${this.URL}orderDelay.php`, JSON.stringify(email));
  }
}
