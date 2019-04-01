import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { SharedEffects } from './shared.effects';
import { SharedErrorStateLoad, SharedErrorStateLoaded } from './shared.actions';

describe('SharedEffects', () => {
  let actions: Observable<any>;
  let effects: SharedEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        SharedEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(SharedEffects);
  });

  describe('loadShared$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new SharedErrorStateLoad() });
      expect(effects.loadShared$).toBeObservable(
        hot('-a-|', { a: new SharedErrorStateLoaded([{"Id": "1", "Message": "Error 1 from api load", "Type"
        : "Error"}, {"Id": "2", "Message": "Warning 1 from api load", "Type": "Warning"}]) })
      );
    });
  });
});
