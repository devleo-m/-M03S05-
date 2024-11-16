import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve validar se 2 valores são iguais', () => {
    const valor1 = { value: true };
    const valor2 = { value: true };

    expect(valor1).toBe(valor1);
    expect(valor1).toEqual(valor2);
  });

  it('deve somar 2 numeros corretamente', () => {
    component.num1 = 2;
    component.num2 = 6;
    component.somarValores();

    expect(component.result).toBe(8);
  });

  it('deve validar se a variavel num1 foi indefinida', () => {
    expect(component.num1).toBeUndefined();
  });

  it('deve validar se a variavel num2 foi definida', () => {
    expect(component.num2).toBeDefined();
  });

  it('deve validar se a expressao regular de CEP funciona', () => {
    const cep = '12345-789';
    expect(cep).toMatch(/^\d{5}-\d{3}$/);
  });

  it('deve validar se a variavel é nula', () => {
    expect(component.num3).toBeNull();
  });

  it('deve validar se a variavel é FALSA', () => {
    let nota = false;

    expect(nota).toBeFalsy();
  });

  it('deve validar se o valor do resultado não é nulo após somar os valores', () => {
    component.num1 = 1;
    component.num2 = 2;
    component.somarValores();

    expect(component.result).not.toBeNull();
  });

  it('deve validar se um valor está contido dentro de um array ', () => {
    let nomes = ['Julia', 'Arthur', 'Bruno', 'Scheila'];

    expect(nomes).toContain('Bruno');
  });

  it('deve validar se um valor é MENOR que 10', () => {
    component.num1 = 1;
    component.num2 = 2;
    component.somarValores();

    expect(component.result).toBeLessThan(10);
  });

  it('deve validar se um valor é MAIOR que 10', () => {
    component.num1 = 10;
    component.num2 = 2;
    component.somarValores();

    expect(component.result).toBeGreaterThan(10);
  });

  it('deve validar se um valor é igual ou MAIOR que 10', () => {
    component.num1 = 10;
    component.num2 = 28;
    component.somarValores();

    expect(component.result).toBeGreaterThanOrEqual(10);
  });

  it('deve validar se um valor é igual ou MENOR que 10', () => {
    component.num1 = 1;
    component.num2 = 1;
    component.somarValores();

    expect(component.result).toBeLessThanOrEqual(10);
  });

  it('deve subtrair 2 numeros corretamente', () => {
    component.num1 = 5;
    component.num2 = 4;
    component.subtrairValores();

    expect(component.result).toBe(1);
  });

  it('deve multiplicar 2 numeros corretamente', () => {
    component.num1 = 10;
    component.num2 = 5;
    component.multiplicarValores();

    expect(component.result).toBe(50);
  });

  it('deve validar se o valor do resultado está correto após somar os valores', () => {
    component.num1 = 5;
    component.num2 = 8;
    component.somarValores();

    expect(component.result).toBe(13);
  });
});
