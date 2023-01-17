import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloCarritoComponent } from './titulo-carrito.component';

describe('TituloCarritoComponent', () => {
  let component: TituloCarritoComponent;
  let fixture: ComponentFixture<TituloCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
