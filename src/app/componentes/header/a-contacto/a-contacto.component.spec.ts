import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AContactoComponent } from './a-contacto.component';

describe('AContactoComponent', () => {
  let component: AContactoComponent;
  let fixture: ComponentFixture<AContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
