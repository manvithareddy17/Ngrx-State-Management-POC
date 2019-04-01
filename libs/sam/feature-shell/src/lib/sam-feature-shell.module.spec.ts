import { async, TestBed } from '@angular/core/testing';
import { SamFeatureShellModule } from './sam-feature-shell.module';

describe('SamFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SamFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SamFeatureShellModule).toBeDefined();
  });
});
