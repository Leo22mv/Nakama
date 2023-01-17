import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloRComponent } from './titulo-r.component';

describe('TituloRComponent', () => {
  let component: TituloRComponent;
  let fixture: ComponentFixture<TituloRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
