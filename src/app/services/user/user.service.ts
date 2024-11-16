import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usuarios: string[] = [];

  adicionarUsuario(nome: string) {
    this.usuarios.push(nome);
  }

  listarUsuarios() {
    return this.usuarios;
  }

  limparListaUsuarios() {
    this.usuarios = [];
  }
}
