import { TestBed } from '@angular/core/testing';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve lançar um erro ao tentar dividir um valor por zero usando o toThrow', () => {
    expect(() => service.dividir(10, 0)).toThrow();
  });

  it('deve lançar um erro ao tentar dividir um valor por zero usando o toThrowError', () => {
    expect(() => service.dividir(10, 0)).toThrowError(
      'Não é permitida a divisão por zero'
    );
  });

  it('deve retornar true para "Ana"', () => {
    expect(service.validarNome('Ana')).toBe(true);
  });

  it('deve retornar false para "A"', () => {
    expect(service.validarNome('A')).toBeFalsy();
  });

  it('deve retornar false para strings e numeros', () => {
    expect(service.validarNome('Ana567')).toBeFalsy();
  });

  it('deve retornar false para caracateres especiais', () => {
    expect(service.validarNome('!!!@kkk')).toBeFalsy();
  });

  it('deve retornar false para strings vazias', () => {
    expect(service.validarNome('')).toBeFalsy();
  });

  it('deve retornar false para strings e numeros', () => {
    expect(service.validarNome('J0ao')).not.toBeTruthy();
  });

  it('deve retornar false para strings com caracteres especiais', () => {
    expect(service.validarNome('João')).not.toBeTruthy();
  });

  it('deve ficar espionando a função somar e retornar um valor fixo', () => {
    const spy = spyOn(service, 'somar').and.returnValue(5);

    const result = service.somar(2, 8);
    expect(result).toBe(5);
    console.log('resultado: ', result);
  });

  it('deve ficar espionando a função somar e se comportar da forma original', () => {
    const spy = spyOn(service, 'somar').and.callThrough();

    const result = service.somar(2, 8);
    expect(result).toBe(10);
    console.log('resultado: ', result);
  });

  it('deve ficar espionando a função somar e verficar se ela foi chamada ao menos 1 vez', () => {
    const spy = spyOn(service, 'somar').and.callThrough();

    service.somar(2, 8);
    expect(spy).toHaveBeenCalled();
  });

  it('deve ficar espionando a função somar e verficar se ela foi chamada 3 vezes', () => {
    const spy = spyOn(service, 'somar').and.callThrough();

    service.somar(2, 8);
    service.somar(2, 8);
    service.somar(2, 8);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  xit('deve ficar espionando a função somar e verficar quais parametros foram passados', () => {
    const spy = spyOn(service, 'somar').and.callThrough();

    service.somar(2, 8);
    expect(spy).toHaveBeenCalledWith(2, 8);
  });
});
