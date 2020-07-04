import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrueubaParallaxComponent } from './prueuba-parallax.component';

describe('PrueubaParallaxComponent', () => {
  let component: PrueubaParallaxComponent;
  let fixture: ComponentFixture<PrueubaParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrueubaParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrueubaParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
