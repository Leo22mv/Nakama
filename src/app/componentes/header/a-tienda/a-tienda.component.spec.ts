import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATiendaComponent } from './a-tienda.component';

describe('ATiendaComponent', () => {
  let component: ATiendaComponent;
  let fixture: ComponentFixture<ATiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATiendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
