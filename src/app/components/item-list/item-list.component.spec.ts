import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.items = [];
  });

  beforeAll(() => {});

  afterAll(() => {});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve adicionar um item a lista', () => {
    component.newItem = 'item 1';
    component.addItem();

    expect(component.items.length).toBe(1);
  });

  it('não deve adicionar um item na lista se o campo estiver vazio ', () => {
    component.addItem();
    expect(component.items.length).toBe(0);
  });

  it('deve adicionar multiplos itens a lista', () => {
    component.newItem = 'item 1';
    component.addItem();
    component.newItem = 'item 2';
    component.addItem();
    expect(component.items.length).toBe(2);
    expect(component.items).toEqual(['item 1', 'item 2']);
  });
});
