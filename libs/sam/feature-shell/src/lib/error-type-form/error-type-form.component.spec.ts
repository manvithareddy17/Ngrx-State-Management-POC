import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTypeFormComponent } from './error-type-form.component';

describe('ErrorTypeFormComponent', () => {
  let component: ErrorTypeFormComponent;
  let fixture: ComponentFixture<ErrorTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
