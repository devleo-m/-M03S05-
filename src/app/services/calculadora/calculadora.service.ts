import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  somar(a: number, b: number): number {
    return a + b;
  }

  subtrair(a: number, b: number): number {
    return a - b;
  }

  dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Não é permitida a divisão por zero');
    }

    return a / b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  validarNome(nome: string) {
    if (nome.length < 2) {
      return false;
    }

    const regex = /^[a-zA-Z]+$/;
    return regex.test(nome);
  }
}
