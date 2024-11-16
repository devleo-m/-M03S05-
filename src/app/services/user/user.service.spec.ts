import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeAll(() => {
    console.log('iniciando os testes..');
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  afterEach(() => {
    service.limparListaUsuarios();
  });

  afterAll(() => {
    console.log('testes concluidos');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve validar a adição de um usuario a lista', () => {
    let nome = 'Julia';
    service.adicionarUsuario(nome);
    expect(service.listarUsuarios()).toContain('Julia');
  });

  it('deve validar a adição de mais de um usuario a lista', () => {
    service.adicionarUsuario('Lucas');
    service.adicionarUsuario('Andrew');
    service.adicionarUsuario('Leandro');
    expect(service.listarUsuarios()).toEqual(['Lucas', 'Andrew', 'Leandro']);
  });

  it('deve retornar uma lista vazia se nenhum usuario foi adicionado', () => {
    expect(service.listarUsuarios()).toEqual([]);
  });
});
