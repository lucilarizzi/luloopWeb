import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosDestacadosComponent } from './trabajos-destacados.component';

describe('TrabajosDestacadosComponent', () => {
  let component: TrabajosDestacadosComponent;
  let fixture: ComponentFixture<TrabajosDestacadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajosDestacadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajosDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
