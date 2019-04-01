import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorFormComponent } from './error-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import {MockStore} from '';

describe('ErrorFormComponent', () => {
  let component: ErrorFormComponent;
  let fixture: ComponentFixture<ErrorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ ErrorFormComponent ],
      providers: [
        {
          provide: Store, useValue: new MockStore({

          })
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
