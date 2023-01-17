import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AInicioComponent } from './a-inicio.component';

describe('AInicioComponent', () => {
  let component: AInicioComponent;
  let fixture: ComponentFixture<AInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
