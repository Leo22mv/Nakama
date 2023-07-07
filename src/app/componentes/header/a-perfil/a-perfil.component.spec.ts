import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APerfilComponent } from './a-perfil.component';

describe('APerfilComponent', () => {
  let component: APerfilComponent;
  let fixture: ComponentFixture<APerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
