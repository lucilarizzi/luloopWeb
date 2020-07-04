import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoHomeComponent } from './nuevo-home.component';

describe('NuevoHomeComponent', () => {
  let component: NuevoHomeComponent;
  let fixture: ComponentFixture<NuevoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
