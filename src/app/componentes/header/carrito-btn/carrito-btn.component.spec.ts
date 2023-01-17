import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoBtnComponent } from './carrito-btn.component';

describe('CarritoBtnComponent', () => {
  let component: CarritoBtnComponent;
  let fixture: ComponentFixture<CarritoBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
