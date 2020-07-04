import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoScreensComponent } from './two-screens.component';

describe('TwoScreensComponent', () => {
  let component: TwoScreensComponent;
  let fixture: ComponentFixture<TwoScreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoScreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
