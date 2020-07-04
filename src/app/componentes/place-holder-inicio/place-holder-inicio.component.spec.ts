import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceHolderInicioComponent } from './place-holder-inicio.component';

describe('PlaceHolderInicioComponent', () => {
  let component: PlaceHolderInicioComponent;
  let fixture: ComponentFixture<PlaceHolderInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceHolderInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceHolderInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
